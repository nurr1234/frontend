import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserNewPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userType: 'member', // Varsayılan kullanıcı tipi
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserId = 123; 
    navigate(`/users/${newUserId}/edit`);
  };

  return (
    <div>
      <h2>New User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formUserType">
          <Form.Label>User Type</Form.Label>
          <Form.Control
            as="select"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value="member">Member</option>
            <option value="admin">Admin</option>
            {/* Diğer kullanıcı tipleri buraya eklenebilir */}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default UserNewPage;
