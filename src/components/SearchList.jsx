import React from "react";
import { Spinner, ListGroup } from "react-bootstrap";
import SearchCard from "./SearchCard";

export default function SearchList({ trailerHandler, actorHandler, movies }) {
  return (
    <div>
      {movies === null ? (
        <Spinner />
      ) : (
        <ListGroup variant="flush">
          {movies.map((movie, index) => {
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
