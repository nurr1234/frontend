
import React from 'react'
import { Col,Row,Card,Container } from 'react-bootstrap'
import Map from "./map"
import ContactForm from './contact-form'

const Contact = () => {
  return (
    <div className='contact'>
        <Container>
            <Card>
                <Card.Body>
                    <Row className='g-5 '>
                        <Col md={8}>
                            <ContactForm/>
                        </Col>
                        <Col md={4}>

                        </Col>
                    </Row>
                </Card.Body>

            </Card>
        </Container>
        <Map/>
      
    </div>
  )
}

export default Contact
