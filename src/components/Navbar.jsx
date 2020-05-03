import React from "react";
import { Navbar } from "react-bootstrap";

export default function SiteNavbar(props) {
  return (
    <Navbar className="navbar">
      <Navbar.Brand>
        <img
          src={props.logo}
          className="d-inline-block align-top"
          alt="Movie Widget logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
}
