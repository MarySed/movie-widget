import React from "react";
import { Nav } from "react-bootstrap";
import Pill from "./NavPill";

export default function NavPills({
  movies,
  searchHandler,
  search,
  tabHandler,
}) {
  const handleAllFilter = () => {
    searchHandler(["movie", "tv", "person"]);
    tabHandler();
  };

  const handleMovieFilter = () => {
    if (movies) {
      searchHandler(["movie"]);
    }
  };

  const handleShowFilter = () => {
    if (movies) {
      searchHandler(["tv"]);
    }
  };

  const handlePersonFilter = () => {
    if (movies) {
      searchHandler(["person"]);
    }
  };

  //Created to deal with tabs not changing due to lack of page re-render
  const activeHandler = () => {
    if (tabHandler()) {
      return false;
    }
  };

  return (
    <Nav variant="pills" defaultActiveKey="all">
      <Nav.Item>
        <Nav.Link
          eventKey={"all"}
          onClick={handleAllFilter}
          className={tabHandler() ? "active" : null}
        >
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={"movies"}
          onClick={handleMovieFilter}
          active={activeHandler()}
        >
          Movies
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={"tv"}
          onClick={handleShowFilter}
          active={activeHandler()}
        >
          TV Shows
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={"people"}
          onClick={handlePersonFilter}
          active={activeHandler()}
        >
          People
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
