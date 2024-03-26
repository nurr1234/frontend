import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUser } from "../../../api/user-service";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setListRefreshToken, setOperation } from "../../../store/slices/misc-slice";
import { swalAlert } from "../../../helpers/functions/swal";
import ButtonLoader from "../../common/button-loader";

const NewUserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/\d{3}-\d{3}-\d{4}/g, "Invalid phone number"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await createUser(values);
      formik.resetForm();
      dispatch(setOperation(null));
      dispatch(setListRefreshToken(Math.random()));
      swalAlert("User was created successfully", "success");
      history.push("/users"); // Redirect back to UsersPage after successful creation
    } catch (err) {
      console.log(err);
      const errMsg = err.response.data.message;
      swalAlert(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleCancel = () => {
    formik.resetForm();
    dispatch(setOperation(null));
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>New User</Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    {...formik.getFieldProps("firstName")}
                    isInvalid={formik.touched.firstName && formik.errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    {...formik.getFieldProps("lastName")}
                    isInvalid={formik.touched.lastName && formik.errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    {...formik.getFieldProps("email")}
                    isInvalid={formik.touched.email && formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXX-XXX-XXXX"
                    {...formik.getFieldProps("phoneNumber")}
                    isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button variant="warning" type="button" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  variant="secondary"
                  type="submit"
                  disabled={!formik.dirty || !formik.isValid || loading}
                  className="ms-3"
                >
                  {loading && <ButtonLoader />} Create
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewUserForm;
