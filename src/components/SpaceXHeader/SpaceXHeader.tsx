import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SpaceXLogo from "../../images/spacex-logo.png";

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="sm">
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
        <Nav justify>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/launches">Launches</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
