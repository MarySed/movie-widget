import React from "react";
import { Nav } from "react-bootstrap";

export default function Pill(props) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={props.eventKey} onClick={props.function}>
        {props.title}
      </Nav.Link>
    </Nav.Item>
  );
}
