import React from "react";
import { Col } from "react-bootstrap";
export default function Package(props) {
  return (
    <>
      <Col sm="4" className=" d-flex mb-4 mb-sm-0">
        <div className="packageList py-4 d-flex flex-column w-100">
          <h3>{props.name}</h3>
          <h4>
            <span className="mr-1">$</span>
            {props.price}
          </h4>
          <ul className="list-unstyled my-4 flex-fill">
            <li className="mb-2">{props.features1}</li>
            <li className="mb-2">{props.features2}</li>
            <li className="mb-2">{props.features3}</li>
            <li className="mb-2">{props.features4}</li>
            <li className="mb-2">{props.features5}</li>
          </ul>
          {props.children}
        </div>
      </Col>
    </>
  );
}
