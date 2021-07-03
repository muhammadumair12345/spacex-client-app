import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SpaceXLogo from "../../images/spacex-logo.png";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="sm">
      <NavLink to="/">
        <img
          alt=""
          src={SpaceXLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        SpaceX App
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav justify>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/launches">Launches</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
