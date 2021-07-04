import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HouseFill, BugFill } from "react-bootstrap-icons";
import SpaceXLogo from "../../images/spacex-logo.png";
import { NavLink } from "react-router-dom";
import { Header } from "./SpaceXHeader.style";

const SpaceXHeader: React.FC = () => {
  return (
    <Header collapseOnSelect bg="dark" variant="dark" sticky="top" expand="sm">
      <NavLink to="/" className="logo">
        <img alt="" src={SpaceXLogo} className="logo-img" />{" "}
        <h3 className="logo-title">SpaceX App</h3>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav">
          <NavLink to="/" className="nav-link d-flex align-items-center">
            <HouseFill className="mr-1" />
            Home
          </NavLink>
          <NavLink
            to="/launches"
            className="nav-link d-flex align-items-center"
          >
            <BugFill className="mr-1" />
            Launches
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Header>
  );
};

export default SpaceXHeader;
