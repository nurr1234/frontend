import { Col, Container, Image, Row } from "react-bootstrap";
import "./errors.scss";
const UnauhorizedPage = () => {
  return (
    <Container className="error-page d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Image src="/images/error/unauthorizedlog.png" alt="unauhorized" />
        </Col>
      </Row>
    </Container>
  );
};

export default UnauhorizedPage;