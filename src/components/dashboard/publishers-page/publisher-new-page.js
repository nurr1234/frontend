import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PublisherList = () => {
  const navigate = useNavigate();

  const handleNewPublisher = () => {
    navigate('/dashboard/publishers/new');
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Publisher List</Card.Title>
          <div className="d-flex mb-3">
            <Button onClick={handleNewPublisher}>New Publisher</Button>
          </div>
          {/* Publisher listesi ve diğer bileşenler buraya eklenecek */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PublisherList;
