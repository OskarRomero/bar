// @flow
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// images
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="py-lg-3 bg-dark"
      >
        <Container>
          <Navbar.Brand href="/" className="me-lg-5">
            <img src={logo} alt="" className="logo-dark" height="18" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <i className="mdi mdi-menu"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav as="ul" className="me-auto align-items-center">
              <Nav.Item as="li" className="mx-lg-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mx-lg-1">
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Features
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mx-lg-1">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Pricing
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mx-lg-1">
                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  FAQs
                </NavLink>
              </Nav.Item>

              <Nav.Item className="mx-lg-1">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
