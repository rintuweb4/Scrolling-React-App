import React from "react";
import { Row, Container, Col } from "react-bootstrap";

export default function Download() {
  return (
    <>
      <Row className="no-gutters download mt-5 text-center">
        <Container className="my-5">
          <Row className="text-white">
            <Col sm={{ offset: 2, span: 8 }}>
              <h2>Download App</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                sapiente tempore quasi ipsam. Sapiente aut excepturi porro,
                quaerat sint laborum.
              </p>
              <div className="d-flex justify-content-center mt-4">
                <a href=".#" className="w-25 mr-2">
                  <img
                    src={require("../Images/googlePlaystore.png")}
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <a href=".#" className="w-25">
                  <img
                    src={require("../Images/applePlaystore.png")}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
