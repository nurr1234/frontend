import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthorNewPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert('Please fill in all fields');
      return;
    }
    console.log({ firstName, lastName, birthDate });
    navigate('/authors');
    
  };

  return (
    <div className="container mt-4">
      <h2>New Author</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="birthDate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Birth Date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthorNewPage;