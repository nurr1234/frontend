import React, { useState } from "react";
import { Button, Card, Container, Form, Pagination } from "react-bootstrap";
import publishersData from "./publishersData.json"; 

const PublisherSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;

  const getPublishersData = () => {
    return publishersData;
  };

  const handleSearch = () => {
    
    const data = getPublishersData();

    
    const filteredData = data.filter((publisher) =>
      publisher.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

   
    setSearchResults(filteredData);
    setCurrentPage(1);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
    setCurrentPage(1);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleNewPublisher = () => {
    
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Publisher Search</Card.Title>
          <Form.Group className="mb-3" controlId="searchQuery">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Publisher name"
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
      {currentResults.length > 0 && (
        <div className="mt-3">
          {currentResults.map((result) => (
            <Card key={result.id} className="mb-3">
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>{result.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
          <Pagination>
            {Array.from({ length: Math.ceil(searchResults.length / resultsPerPage) }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      )}
    </Container>
  );
};

export default PublisherSearchPage;
