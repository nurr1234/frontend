import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const CategorySearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Category Search</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search by category name"
              value={searchTerm}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="me-2">
            Search
          </Button>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CategorySearch;
