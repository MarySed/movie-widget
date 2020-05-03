import React, { useState } from "react";
import { ProgressBar, Col, Card } from "react-bootstrap";

export default function Rating(props) {
  //need to get rating number
  //need to make function to multiply by 10
  const realRating = props.rating * 10;

  return (
    <div>
      <Card.Text>User Rating: {realRating}</Card.Text>
      <ProgressBar
        variant={
          realRating <= 39
            ? "danger"
            : realRating >= 40 && realRating <= 69
            ? "warning"
            : realRating >= 70 && realRating <= 100
            ? "success"
            : null
        }
        now={realRating}
      />
    </div>
  );
}
