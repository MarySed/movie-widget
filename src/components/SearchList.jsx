import React from "react";
import { Spinner, ListGroup, Container } from "react-bootstrap";
import SearchCard from "./SearchCard";

export default function SearchList({ display, trailerHandler, actorHandler }) {
  return (
    <div>
      {display === null ? (
        <Spinner />
      ) : (
        <ListGroup variant="flush">
          {display.map((movie, index) => {
            return (
              <SearchCard
                movie={movie}
                key={movie.id}
                trailerHandler={trailerHandler}
                actorHandler={actorHandler}
              />
            );
          })}
        </ListGroup>
      )}
    </div>
  );
}
