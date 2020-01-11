import React from "react";
import { Row, Container, Col } from "react-bootstrap";

export default function Banner() {
  return (
    <>
      <Row className="no-gutters banner mt-5">
        <Container className="my-5">
          <Row className="text-white">
            <Col sm="6" className="pt-3">
              <h1>React App</h1>
              <h4 className="font-weight-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, iure!
              </h4>
              <div className="d-flex mt-4">
                <button href="#" className="btn mr-2">
                  Purchase
                </button>
                <button href="#" className="btn bg-white">
                  Learn More
                </button>
              </div>
            </Col>
            <Col sm="6" className="text-center d-none d-sm-block">
              <img
                src={require("../Images/banner.png")}
                className="w-50"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
