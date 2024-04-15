import React, { useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setListRefreshToken, setOperation } from "../../store/slices/misc-slice";
import { swalAlert } from "../../helpers/functions/swal";
import ButtonLoader from "../../components/common/button-loader";
import { Link, useNavigate } from "react-router-dom";

const createBook = async (bookData) => {
  console.log("Creating new book:", bookData);
};

const NewBookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    title: "",
    author: "",
    category: "",
    publisher: "",
    publishDate: "",
    isbn: "",
    language: ""
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    category: Yup.string().required("Category is required"),
    publisher: Yup.string().required("Publisher is required"),
    publishDate: Yup.date().required("Publish date is required"),
    isbn: Yup.string().required("ISBN is required"),
    language: Yup.string().required("Language is required")
  });

  const onSubmit = async (values, formikBag) => {
    setLoading(true);
    try {
      await createBook(values);
      formikBag.resetForm();
      dispatch(setListRefreshToken(Math.random()));
      dispatch(setOperation(null));
      swalAlert("Book created successfully", "success");

      
      navigate("/books");

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
                    className="custom-input"
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
                    className="custom-input"
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
                    className="custom-input"
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
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.publisher}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="publishDate" label="Publish Date">
                  <Form.Control
                    type="date"
                    {...formik.getFieldProps("publishDate")}
                    isInvalid={formik.touched.publishDate && !!formik.errors.publishDate}
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.publishDate}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="isbn" label="ISBN">
                  <Form.Control
                    type="text"
                    placeholder="Enter ISBN"
                    {...formik.getFieldProps("isbn")}
                    isInvalid={formik.touched.isbn && !!formik.errors.isbn}
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.isbn}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="language" label="Language">
                  <Form.Control
                    type="text"
                    placeholder="Enter language"
                    {...formik.getFieldProps("language")}
                    isInvalid={formik.touched.language && !!formik.errors.language}
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.language}
                  </Form.Control.Feedback>
                  </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button variant="warning" type="button" onClick={handleCancel} className="me-3">
                  Cancel
                </Button>
                <Button
                  variant="secondary"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
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
