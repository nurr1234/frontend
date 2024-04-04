import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { FaUsers, FaLeaf, FaBook, FaPrint, FaLayerGroup, FaHandshake, FaHandHolding, FaPrayingHands } from 'react-icons/fa';
import "./dashboard-navigation.scss";


function GridExample() {
  const icons = [FaUsers, FaLeaf, FaBook, FaPrint, FaLayerGroup, FaHandshake, FaHandHolding, FaPrayingHands];
  const categories = ["Members", "Authors", "Books", "Publishers", "Categories", "Total Loans", "Not returned", "Expired"];

  return (
    <div className='dashboard-navigation'>
      <Row xs={2} md={2} lg={3} className="g-4">
        {categories.map((category, idx) => (
          <Col key={idx}>
            <Link to={`/${category.toLowerCase()}`} className="dashboard-card-link">
              <Card className="dashboard-card d-flex align-items-center">
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Card.Title className="dashboard-card-title">{category}</Card.Title>
                    <Card.Text className="dashboard-card-text">
                      1231
                    </Card.Text>
                  </div>
                  <div className="dashboard-icon-container">
                    {React.createElement(icons[idx])}
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
