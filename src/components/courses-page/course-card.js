import React from "react";
import { Button, Card } from "react-bootstrap";
// import {FiUser, FiTrendingUp, FiDollarSign } from  'react-icons/fi';
import "./course-card.scss"


const CourseCard = ({id,title,desc,type,date,user,comment,rating,price,image,featured}) => {
  return (
    <Card className="course-card">

      <Card.Body>
        <div  className="image">
        <Card.Img variant="top" src={`/images/courses/${image}`} alt={title} />
        </div>
          <Card.Title>{title} </Card.Title>
          <Card.Subtitle>
            {/* <div><FiUser/> {user.name}</div>
            <div><FiTrendingUp/>{rating}</div>
            <div><FiDollarSign/>{price}</div>  */}
        </Card.Subtitle>
        <Button className="custom-button" variant="yellow">Go Somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
