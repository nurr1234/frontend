import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setListRefreshToken, setOperation } from "../../store/slices/misc-slice";
import { swalAlert } from "../../helpers/functions/swal";
import ButtonLoader from "../../components/common/button-loader";

const NewCategoryForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  // Yerel olarak kategori oluşturma fonksiyonu tanımla
  const createCategory = async (categoryData) => {
    console.log("Creating new category:", categoryData);
    // Burada kategori oluşturma işlemleri gerçekleştirilebilir.
    // Örnek olarak, konsola loglama yapıldı.
    // Gerçek bir API isteği yapmak isterseniz burada ilgili işlemleri gerçekleştirebilirsiniz.
  };

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      // createCategory fonksiyonunu kullanarak kategori oluştur
      await createCategory(values);
      formik.resetForm();
      dispatch(setOperation(null));
      dispatch(setListRefreshToken(Math.random()));
      swalAlert("Category was created successfully", "success");
    } catch (err) {
      console.error(err);
      swalAlert("Failed to create category", "error");
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
