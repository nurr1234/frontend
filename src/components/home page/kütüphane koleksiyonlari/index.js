import React from 'react';
import "./kutuphane-koleksiyonlari.scss";
import { Col, Container, Row } from 'react-bootstrap';
import courses from "../../../helpers/data/courses.json";
import CourseCard from '../../courses-page/course-card';

const KutuphaneKoleksiyonlari = () => {
  const kutuphaneKoleksiyonlari = courses.filter(course => course.featured);

  return (
    <div className='kutuphaneKoleksiyonlari'>
      <h2>Kütüphane Koleksiyonları</h2>

      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
          {kutuphaneKoleksiyonlari.map(course => (
            <Col key={course.id}>
              <CourseCard {...course}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default KutuphaneKoleksiyonlari;
