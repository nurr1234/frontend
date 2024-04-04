import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { swalConfirm, swalAlert } from '../../helpers/functions/swal'; // Import swal functions

const AuthorEditPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating author...
    navigate('/authors'); // Navigate to the author list page after editing
  };

  const handleDelete = async () => {
    const resp = await swalConfirm('Are you sure to delete?');
    if (!resp.isConfirmed) return;
    // Logic for deleting author...
    swalAlert('Author was deleted', 'success');
    navigate('/authors'); // Navigate to the author list page after deleting
  };

  return (
    <div className="container mt-4">
      <h2>Edit Author</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Button variant="danger" onClick={handleDelete} className="ms-2">
          Delete
        </Button>
      </Form>
    </div>
  );
};

export default AuthorEditPage;
