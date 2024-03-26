import React from "react";
import "./style.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <Container className="mobile-app">
      <div>
        <Row className="g-4">
          <Col lg={7}>
            <h1>Online Kütüphane</h1>
          </Col>
          <Col lg={5}>
            <Button variant="outline-primary" className="outline">
              <FaApple />
              App Store
            </Button>
            <Button variant="outline-primary" className="outline">
              <FaGooglePlay />
              Play Store
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MobileApp;