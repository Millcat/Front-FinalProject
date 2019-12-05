import React from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavMain = () => {
  return (
    <Navbar expand="lg" className="nav">
      <div className="container-nav">
        <div className="container-nav-left">
          <Navbar.Brand href="#home">
            <img src="" id="logo-paris" alt="" />
          </Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">All experiences</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div className="container-nav-right">
          <NavDropdown
            title="My experiences"
            id="basic-nav-dropdown"
            className="dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Create an experience
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Edit an experience
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Sign In</Nav.Link>
          <Nav.Link href="#link">Sign Up</Nav.Link>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </Navbar>
  );
};

export default NavMain;
