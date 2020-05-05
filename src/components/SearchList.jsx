import React from "react";
import { Spinner, ListGroup, Container, Alert } from "react-bootstrap";
import SearchCard from "./SearchCard";

export default function SearchList({
  trailerHandler,
  actorHandler,
  movies,
  search,
  query,
}) {
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
                search={search}
                query={query}
              />
            );
          })}
        </ListGroup>
      )}
    </div>
  );
}
