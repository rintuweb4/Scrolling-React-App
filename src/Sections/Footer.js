import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import SocialIcons from "../Components/SocialIcons";
export default function Footer() {
  return (
    <>
      <Row className="no-gutters footer py-3 text-white">
        <Container>
          <Row>
            <Col sm="6">
              <p className="mb-0 pt-2">React App 2020. All Right Reserved</p>
            </Col>
            <Col sm="6" className="text-sm-right mt-3 mt-sm-0">
              <SocialIcons />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
