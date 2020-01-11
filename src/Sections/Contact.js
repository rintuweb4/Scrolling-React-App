import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import ContactForm from "../Components/ContactForm";
import Map from "../Components/Map";
export default function Contact() {
  return (
    <>
      <Row className="no-gutters contactSection position-relative">
        <Container>
          <Row>
            <Col sm="6" className="mr-auto">
              <div className="contactform mb-4">
                <h2 className="mb-4 text-white mt-4">Contact Us</h2>

                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="map">
          <Row>
            <Col sm="6" className="px-0 ml-auto">
              <Map />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
