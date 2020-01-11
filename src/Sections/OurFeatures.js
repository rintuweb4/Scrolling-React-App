import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Features from "../Components/Features";
export default function OurFeatures() {
  return (
    <>
      <Row className="no-gutters text-center" id="ourFeaturesSection">
        <Container className="mt-5 mb-4 pt-3">
          <Row>
            <Col sm="12">
              <h2>Our Features</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                <br />
                perspiciatis, nemo dolores blanditiis
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Features
              icon={<i className="fa fa-map my-3" aria-hidden="true"></i>}
              title="Easy Navigation"
              info="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
            <Features
              icon={<i className="fa fa-tablet my-3" aria-hidden="true"></i>}
              title="Responsive Design"
              info="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
            <Features
              icon={<i className="fa fa-eye my-3" aria-hidden="true"></i>}
              title="Retina Ready"
              info="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
          </Row>
          <Row className="mt-sm-5">
            <Features
              icon={<i className="fa fa-code my-3" aria-hidden="true"></i>}
              title="Clean Coding"
              info="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
            <Features
              icon={<i className="fa fa-download my-3" aria-hidden="true"></i>}
              title="Available Demo Version"
              info="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
            <Features
              icon={<i className="fa fa-users my-3" aria-hidden="true"></i>}
              title="Client Orianted"
              info="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
          </Row>
        </Container>
      </Row>
    </>
  );
}
