import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import LearnMoreBtn from "../Components/LearnMoreBtn";

export default function About() {
  return (
    <>
      <Row className="no-gutters" id="aboutSection">
        <Container className="mt-5 mb-4 pt-3">
          <Row>
            <Col sm="6">
              <img
                src={require("../Images/aboutImage.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col sm="6">
              <h2>About Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                perspiciatis, nemo dolores blanditiis sint labore laudantium
                molestias consectetur distinctio pariatur earum sunt neque illum
                dolorem debitis similique. Temporibus, quo facere.
              </p>
              <LearnMoreBtn>Learn More</LearnMoreBtn>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
