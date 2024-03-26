import React from "react";
import { Button, Col, InputGroup, Row, FormGroup } from "react-bootstrap";
import { Form } from "react-router-dom";
import { FiMail, FiMessageSquare, FiSend, FiTag, FiUser } from "react-icons/fi";
import "./contact-form.scss";
import * as Yup from "yup";
import { useFormik } from "formik";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required")
  });

  const onSubmit = (values) => {
    // Form submit işlemi burada gerçekleştirilebilir
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <Form className="contact-form" noValidate onSubmit={formik.handleSubmit}>
      <h2>Send me message</h2>
      <Row className="g-3">
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FiUser /></InputGroup.Text>
            <Form.Control
              placeholder="Your name"
              aria-label="Your name"
              aria-describedby="basic-addon1"
              {...formik.getFieldProps("name")}
              isValid={formik.touched.name && !formik.errors.name}
              isInvalid={formik.touched.name && !!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FiMail /></InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              aria-describedby="basic-addon1"
              {...formik.getFieldProps("email")}
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={formik.touched.email && !!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col xs={12}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FiTag /></InputGroup.Text>
            <Form.Control
              placeholder="Subject"
              aria-label="Subject"
              aria-describedby="basic-addon1"
              {...formik.getFieldProps("subject")}
              isValid={formik.touched.subject && !formik.errors.subject}
              isInvalid={formik.touched.subject && !!formik.errors.subject}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.subject}</Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col xs={12}>
          <InputGroup className="mb-3">
            <InputGroup.Text><FiMessageSquare /></InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              {...formik.getFieldProps("message")}
              isValid={formik.touched.message && !formik.errors.message}
              isInvalid={formik.touched.message && !!formik.errors.message}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.message}</Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Row>

      <Button type="submit" variant="primary"><FiSend /> Send</Button>
    </Form>
  );
};

export default ContactForm;