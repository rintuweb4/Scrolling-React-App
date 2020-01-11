import React from "react";
import { Row, Container, Col } from "react-bootstrap";
export default function ChooseUs() {
  return (
    <>
      <Row className="no-gutters chooseUsSection">
        <Container className="mt-5 mb-4 pt-3">
          <Row>
            <Col sm="6">
              <h2>Why Choose Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                perspiciatis, nemo dolores blanditiis Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Nisi perspiciatis, nemo
                dolores blanditiis
              </p>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <i className="fa fa-circle pr-2"></i>dolor sit amet
                  consectetur adipisicing elit.
                </li>
                <li className="mb-1">
                  <i className="fa fa-circle pr-2"></i>Nisi perspiciatis, nemo
                  dolores blanditiis
                </li>
                <li className="mb-1">
                  <i className="fa fa-circle pr-2"></i>nemo dolores blanditiis
                  Lorem ipsum
                </li>
                <li className="mb-1">
                  <i className="fa fa-circle pr-2"></i>Nisi perspiciatis, nemo
                  dolores blanditiis
                </li>
                <li className="mb-1">
                  <i className="fa fa-circle pr-2"></i>dolor sit amet
                  consectetur adipisicing elit.
                </li>
              </ul>
              <button className="learnMoreBtn btn text-white m-auto">
                Learn More
              </button>
            </Col>
            <Col sm="6" className="mt-3 mt-sm-0">
              <img
                src={require("../Images/aboutImage.png")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
