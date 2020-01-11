import React from "react";
import { Col } from "react-bootstrap";
export default function Features(props) {
  return (
    <>
      <Col sm="4" className="featureHover mb-3 mb-sm-0">
        {props.icon}
        <h5>{props.title}</h5>
        <p>{props.info}</p>
      </Col>
    </>
  );
}
