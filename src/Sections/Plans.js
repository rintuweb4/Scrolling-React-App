import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Package from "../Components/Package";
import LearnMoreBtn from "../Components/LearnMoreBtn";
export default function Plans() {
  return (
    <>
      <Row className="no-gutters text-center" id="priceSection">
        <Container className="mt-5 mb-4 pt-3">
          <Row>
            <Col sm="12">
              <h2>Choose Your Pricing Plan</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                <br />
                perspiciatis, nemo dolores blanditiis
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Package
              name="Standard"
              price="15"
              features1="2 Email accounts"
              features2="Cloud Storage"
              features3="24/7 Support"
            >
              <button href="#" className="btn m-auto purchaseBtn ">
                Purchase
              </button>
            </Package>
            <Package
              name="Business"
              price="28"
              features1="2 Email accounts"
              features2="Cloud Storage"
              features3="24/7 Support"
              features4="Backup Support"
            >
              <LearnMoreBtn>Purchase</LearnMoreBtn>
            </Package>
            <Package
              name="Premium"
              price="47"
              features1="2 Email accounts"
              features2="Cloud Storage"
              features3="24/7 Support"
              features4="Backup Support"
              features5="Lifetime Hosting"
            >
              <button href="#" className="btn m-auto purchaseBtn ">
                Purchase
              </button>
            </Package>
          </Row>
        </Container>
      </Row>
    </>
  );
}
