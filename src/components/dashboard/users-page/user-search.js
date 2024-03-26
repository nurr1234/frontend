import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const UserSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Form>
      <Row className="mb-3">
        <Col xs={8} sm={6} md={4}>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleInputChange}
            maxLength={30}
          />
        </Col>
        <Col xs={4} sm={6} md={4}>
          <Button
            variant="secondary"
            onClick={handleSearch}
            disabled={searchText.length < 3}
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default UserSearch;
