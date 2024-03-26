import React, { useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setListRefreshToken, setOperation } from "../../store/slices/misc-slice";
import { swalAlert } from "../../helpers/functions/swal";
import ButtonLoader from "../../components/common/button-loader";
import { Link } from "react-router-dom";

const createBook = async (bookData) => {
  // Kitap oluşturma işlemleri burada gerçekleştirilecek
  console.log("Creating new book:", bookData);
};

const NewBookForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    title: "",
    author: "",
    category: "",
    publisher: ""
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    category: Yup.string().required("Category is required"),
    publisher: Yup.string().required("Publisher is required")
  });

  const onSubmit = async (values, formikBag) => {
    setLoading(true);
    try {
      await createBook(values);
      formikBag.resetForm();
      dispatch(setListRefreshToken(Math.random()));
      dispatch(setOperation(null));
      swalAlert("Book created successfully", "success");
    } catch (err) {
      console.log(err);
      swalAlert("Failed to create book", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch(setOperation(null));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link to="/new-book" className="text-decoration-none">New Book</Link>
          </Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              <Col>
                <FloatingLabel controlId="title" label="Title">
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    {...formik.getFieldProps("title")}
                    isInvalid={formik.touched.title && !!formik.errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.title}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="author" label="Author">
                  <Form.Control
                    type="text"
                    placeholder="Enter author"
                    {...formik.getFieldProps("author")}
                    isInvalid={formik.touched.author && !!formik.errors.author}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.author}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="category" label="Category">
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    {...formik.getFieldProps("category")}
                    isInvalid={formik.touched.category && !!formik.errors.category}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.category}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="publisher" label="Publisher">
                  <Form.Control
                    type="text"
                    placeholder="Enter publisher"
                    {...formik.getFieldProps("publisher")}
                    isInvalid={formik.touched.publisher && !!formik.errors.publisher}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.publisher}
                  </Form.Control.Feedback>
                </FloatingLabel>
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
                  disabled={!(formik.dirty && formik.isValid) || loading}
                  className="ms-3"
                >
                  {loading ? <ButtonLoader /> : "Create"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewBookForm;
