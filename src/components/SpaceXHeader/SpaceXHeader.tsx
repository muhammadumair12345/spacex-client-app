import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SpaceXLogo from "../../images/spacex-logo.png";
import { NavLink } from "react-router-dom";
import { Header } from "./SpaceXHeader.style";

const SpaceXHeader: React.FC = () => {
  return (
    <Header collapseOnSelect bg="dark" variant="dark" sticky="top" expand="sm">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={SpaceXLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        SpaceX App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/launches" className="link">
              Launches
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Header>
  );
};

export default SpaceXHeader;
