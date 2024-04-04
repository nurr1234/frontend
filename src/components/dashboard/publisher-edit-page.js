import React, { useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setOperation } from "../../store/slices/misc-slice";
import { swalAlert,swalConfirm } from "../../helpers/functions/swal";
import ButtonLoader from "../../components/common/button-loader";
import { Link } from "react-router-dom";

const updatePublisher = async (id, publisherData) => {
  console.log("Updating publisher with id", id, ":", publisherData);
};

const PublisherEditPage = ({ publisher }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: publisher.name,
    description: publisher.description,
    website: publisher.website
  };

  const onSubmit = async (values, formikBag) => {
    setLoading(true);
    try {
      await updatePublisher(publisher.id, values);
      dispatch(setOperation(null));
      swalAlert("Publisher updated successfully", "success");
    } catch (err) {
      console.log(err);
      swalAlert("Failed to update publisher", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const resp = await swalConfirm("Are you sure you want to delete?");
    if (!resp.isConfirmed) return;
    setLoading(true);
    try {
      // Silme işlemi
      swalAlert("Publisher was deleted", "success");
      dispatch(setOperation(null));
    } catch (err) {
      console.log(err);
      swalAlert("Failed to delete publisher", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch(setOperation(null));
  };

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link to={`/publishers/${publisher.id}/edit`} className="text-decoration-none">Edit Publisher</Link>
          </Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row className="row-cols-1 row-cols-sm-2">
              <Col>
                <FloatingLabel controlId="name" label="Name">
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    {...formik.getFieldProps("name")}
                    className="custom-input"
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="description" label="Description">
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    {...formik.getFieldProps("description")}
                    className="custom-input"
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="website" label="Website">
                  <Form.Control
                    type="text"
                    placeholder="Enter website URL"
                    {...formik.getFieldProps("website")}
                    className="custom-input"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button variant="danger" type="button" onClick={handleDelete} className="me-3">
                  Delete
                </Button>
                <Button variant="warning" type="button" onClick={handleCancel} className="me-3">
                  Cancel
                </Button>
                <Button
                  variant="secondary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <ButtonLoader /> : "Update"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PublisherEditPage;
