import React from "react";
import { Row, Container, Col, Carousel } from "react-bootstrap";
import Slider from "../Components/Slider";

export default function Testimonials() {
  return (
    <>
      <Row className="no-gutters banner mt-5">
        <Container className="my-5">
          <Row className="text-white text-center">
            <Col sm="12">
              <h2>What Our Customer Says</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                <br />
                perspiciatis, nemo dolores blanditiis
              </p>
            </Col>
          </Row>
          <Carousel interval={false} controls={false}>
            <Carousel.Item>
              <Row className="py-5">
                <Col xs sm="6">
                  <Slider
                    imgSrc={require("../Images/picT1.png")}
                    Name="John Dsoza"
                    title="Manager"
                    feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
                  />
                </Col>
                <Col xs sm="6">
                  <Slider
                    imgSrc={require("../Images/picT2.png")}
                    Name="Daniel Dsoza"
                    title="CEO"
                    feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="py-5">
                <Col xs sm="6">
                  <Slider
                    imgSrc={require("../Images/picT3.png")}
                    Name="Kelly"
                    title="Manager"
                    feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
                  />
                </Col>
                <Col xs sm="6">
                  <Slider
                    imgSrc={require("../Images/picT2.png")}
                    Name="Andy"
                    title="Designer"
                    feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="py-5">
                <Col xs sm="6">
                  <Slider
                    imgSrc={require("../Images/picT1.png")}
                    Name="John Dsoza"
                    title="Manager"
                    feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
                  />
                </Col>
                <Col xs sm="6">
                  <Slider
                    imgSrc={require("../Images/picT2.png")}
                    Name="Devid"
                    title="CEO"
                    feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Row>
    </>
  );
}
