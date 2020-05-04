import React from "react";
import { Nav } from "react-bootstrap";
import Pill from "./NavPill";

export default function NavPills({ movies, dispatchDisplay }) {
  const handleAllFilter = () => {
    dispatchDisplay(movies);
  };

  const handleMovieFilter = () => {
    if (movies) {
      let movieFilter = movies.filter((mov) => mov.media_type === "movie");
      dispatchDisplay(movieFilter);
    }
  };

  const handleShowFilter = () => {
    if (movies) {
      let showFilter = movies.filter((mov) => mov.media_type === "tv");
      dispatchDisplay(showFilter);
    }
  };

  const handlePersonFilter = () => {
    if (movies) {
      let personFilter = movies.filter((mov) => mov.media_type === "person");
      dispatchDisplay(personFilter);
    }
  };

  return (
    <Nav variant="pills" defaultActiveKey="all">
      <Pill eventKey={"all"} title={"All"} function={handleAllFilter} />
      <Pill
        eventKey={"movies-link"}
        title={"Movies"}
        function={handleMovieFilter}
      />
      <Pill
        eventKey={"shows-link"}
        title={"TV Shows"}
        function={handleShowFilter}
      />
      <Pill
        eventKey={"people-link"}
        title={"People"}
        function={handlePersonFilter}
      />
    </Nav>
  );
}
