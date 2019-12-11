import React, { useContext } from "react";
import { withRouter } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../auth/useAuth";
import handler from "./../api/handler";
import UserContext from "../auth/UserContext";

const NavMain = withRouter((props) => {
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;
  const { isLoading, isLoggedIn } = useAuth();


  const handleSignout = () =>
    handler.post("/logout").finally(() => {
      setCurrentUser(null);
      props.history.push("/sign-in")
    });

  if (isLoading) return null;

  return (
    <Navbar expand="lg" className="nav">
      <div className="container-nav">
        <div className="container-nav-left">
          <img src="../logo-paris.png" id="logo-paris" alt="logo-paris" />
          <Navbar id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/all-tours" className="nav-link">
                All experiences
              </NavLink>
            </Nav>
          </Navbar>
        </div>
        <div className="container-nav-right">
          <NavDropdown title="My experiences" id="basic-nav-dropdown">
            {" "}
            <NavLink to="/create-tour" className="dropdown-item">
              Create an experience
            </NavLink>
            <NavLink to="/manage-tour" className="dropdown-item">
              Edit an experience
            </NavLink>
          </NavDropdown>
          {!currentUser ?
            <React.Fragment>
              <NavLink to="/sign-in" className="nav-link">
                Sign In
          </NavLink>
              <NavLink to="/sign-up" className="nav-link">
                Sign Up </NavLink>
            </React.Fragment> : <NavLink to="#" onClick={handleSignout} className="nav-link">Log Out</NavLink>}
          <NavLink to="/shopcart" className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            <span id="nbOfToursInCart"></span>
          </NavLink>
        </div>
      </div>
    </Navbar>
  );
});

export default NavMain;
