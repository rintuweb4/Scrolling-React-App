import React, { useState, useEffect } from "react";
import { Row, Container, Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export default function TopNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [hamBurgerAnimation, sethamBurgerAnimation] = useState(false);
  const [contactActive, setcontactActive] = useState("false");

  const expendedHandler = () => {
    setExpanded(expanded ? false : "expanded");
    sethamBurgerAnimation(!hamBurgerAnimation);
  };
  const expandDefaultHandler = () => {
    setExpanded(false);
    sethamBurgerAnimation(false);
  };

  const ScrollTopBtn = () => {
    scroll.scrollToTop({
      smooth: "easeOutQuad"
    });
  };
  useEffect(() => {
    let windowsScrollTop = window.screen.width;
    if (windowsScrollTop < 991) {
      setcontactActive(true);
    } else if (windowsScrollTop > 992) {
      setcontactActive(false);
    }
  }, []);
  return (
    <>
      <Row className="no-gutters navbarTop">
        <Navbar
          bg="light"
          expand="lg"
          variant="light"
          fixed="top"
          className="pb-lg-0"
          expanded={expanded}
        >
          <Container>
            <Navbar.Brand onClick={ScrollTopBtn} className="mb-1">
              ReactApp
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={expendedHandler}
              className={hamBurgerAnimation ? "active" : null}
              children={
                <>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </>
              }
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  activeClass="activeLink"
                  to="aboutSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  onClick={expandDefaultHandler}
                >
                  Home
                </Link>
                <Link
                  activeClass="activeLink"
                  to="ourFeaturesSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link ml-lg-2"
                  onClick={expandDefaultHandler}
                >
                  Features
                </Link>

                <Link
                  activeClass="activeLink"
                  to="priceSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link ml-lg-2"
                  onClick={expandDefaultHandler}
                >
                  Pricing
                </Link>
                <Link
                  activeClass="activeLink"
                  to={contactActive ? "contactSection" : " chooseUsSection"}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="nav-link ml-lg-2"
                  onClick={expandDefaultHandler}
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </>
  );
}
