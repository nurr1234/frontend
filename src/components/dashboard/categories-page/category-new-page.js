import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setListRefreshToken, setOperation } from "../../../store/slices/misc-slice";
import { swalAlert } from "../../../helpers/functions/swal";
import ButtonLoader from "../../common/button-loader";
import { createCategory } from "../../../api/category-service";

const NewCategoryForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await createCategory(values);
      formik.resetForm();
      dispatch(setOperation(null));
      dispatch(setListRefreshToken(Math.random()));
      swalAlert("Category was created successfully", "success");
    } catch (err) {
      console.log(err);
      const errMsg = err.response.data.message;
      swalAlert(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    formik.resetForm();
    dispatch(setOperation(null));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>New Category</Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                {...formik.getFieldProps("name")}
                isValid={formik.touched.name && !formik.errors.name}
                isInvalid={formik.touched.name && !!formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="warning" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="secondary"
              type="submit"
              disabled={!(formik.dirty && formik.isValid) || loading}
              className="ms-3"
            >
              {loading && <ButtonLoader />} Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewCategoryForm;
