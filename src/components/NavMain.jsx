import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavMain = () => {
  return (
    <Navbar expand="lg" className="nav">
      <div className="container-nav">
        <div className="container-nav-left">
          <Navbar.Brand>
            <img src="" id="logo-paris" alt="" />
          </Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/tours" className="nav-link">All experiences
              </NavLink>
            </Nav>
          </Navbar>
        </div>
        <div className="container-nav-right">
          <NavDropdown
            title="My experiences"
            id="basic-nav-dropdown"
          >  <NavLink to="/create-tour" className="dropdown-item">
              Create an experience
            </NavLink>
            <NavLink to="/manage-tour" className="dropdown-item">
              Edit an experience
            </NavLink>
          </NavDropdown>
          <NavLink to="/sign-in" className="nav-link">
            Sign In
          </NavLink>
          <NavLink to="/sign-up" className="nav-link">
            Sign Up
          </NavLink>
          <NavLink to="/shopcart" className="nav-link">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
        </div>
      </div>
    </Navbar>
  );
};

export default NavMain;
