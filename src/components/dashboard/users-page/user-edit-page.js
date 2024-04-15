import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import UserData from '../../../helpers/data/user.json';

const UserEditPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await UserData.getUserById(userId);
        setUser(userData);
        setFormData({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          
        });
        setLoading(false);
      } catch (error) {
        console.error('Error loading user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await UserData.updateUser(userId, formData);
      
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit User</h2>
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
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserEditPage;
