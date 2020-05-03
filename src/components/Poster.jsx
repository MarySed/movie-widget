import React from "react";
import { Card } from "react-bootstrap";

export default function Poster(props) {
  //create an image that displays whatever its source url is

  return <Card.Img src={props.url} className="card__img" />;
}
