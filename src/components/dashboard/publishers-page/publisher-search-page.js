import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const PublisherSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Perform search logic with the searchQuery
    console.log("Searching for:", searchQuery);
    // You can replace the console.log with actual search functionality
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleNewPublisher = () => {
    // Implement redirection logic for new publisher page here
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Publisher Search</Card.Title>
          <Form.Group className="mb-3" controlId="searchQuery">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter search query"
              value={searchQuery}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleSearch} disabled={searchQuery.length < 3}>
              Search
            </Button>
            <Button variant="secondary" onClick={handleClear} className="ms-2">
              Clear
            </Button>
          </div>
        </Card.Body>
      </Card>
      <div className="mt-3">
        <Button variant="success" onClick={handleNewPublisher}>
          New Publisher
        </Button>
      </div>
    </Container>
  );
};

export default PublisherSearchPage;
