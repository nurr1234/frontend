import React from 'react'
import { Card } from 'react-bootstrap'
import { FiClock, FiMapPin} from "react-icons/fi"
import "./event-card.scss";
import ErrorBoundary from '../error-bundary/index';

const EventCard = ({image ,title,time,location}) => {
  return (

    <ErrorBoundary>
    <Card className="event-card">
      
    <Card.Body>
      <div  className="image">
      <Card.Img variant="top" src={`/images/events/${image}`} alt={title} />
      </div>
      <Card.Subtitle>
          <div><FiClock/> {time}</div>
          <div><FiMapPin/>{location}</div>
      </Card.Subtitle>
        <Card.Title>{title} </Card.Title>

    </Card.Body>
  </Card>
  </ErrorBoundary>
  )
}

export default EventCard