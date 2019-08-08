import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={NavLink} to="/">
            MJJ Consulting
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/advantages">
                Advantages
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact Us
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/missionstatement">
                  Mission Statement
                </NavDropdown.Item>
                <NavDropdown.Item href="#...">...</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
