import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Slider(props) {
  return (
    <>
      <Row className="slider no-gutters">
        <Col sm="3" className="mr-sm-n5 mt-3 mb-3 mb-sm-3 pr-sm-2">
          <img src={props.imgSrc} alt="" className="img-fluid" />
        </Col>
        <Col sm="9" className="feedback pl-sm-5 p-2 py-3">
          <h5>{props.Name}</h5>
          <h6>{props.title}</h6>
          <p>{props.feedback}</p>
        </Col>
      </Row>
    </>
  );
}
