import React, { useState } from "react";
import { ProgressBar, Col, Card } from "react-bootstrap";

export default function Rating(props) {
  //Should probably have some sort of check here.
  const realRating = props.rating !== 0 ? props.rating * 10 : "Not Rated";

  return (
    <div>
      <Card.Text>
        User Rating:
        <strong>
          {typeof realRating !== "string"
            ? " " + realRating + "%"
            : " " + realRating}
        </strong>
      </Card.Text>
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
