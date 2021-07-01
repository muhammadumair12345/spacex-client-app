import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SpaceXLogo from "../../images/spacex-logo.png";

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
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
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/launches">Launches</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
