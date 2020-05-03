//Library Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux actions
import {
  setQuery,
  setDisplay,
  setActors,
  fetchMovies,
  fetchMovieTrailer,
  fetchShowTrailer,
} from "./redux/actions";

//Components
import SearchContainer from "./components/SearchContainer";
import SearchList from "./components/SearchList";
import NavPills from "./components/NavPills";

//Bootstrap and Style
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Nav,
  Navbar,
} from "react-bootstrap";

import logo from "./assets/Logo.svg";
import SiteNavbar from "./components/Navbar";

function App() {
  const query = useSelector((state) => state.query);
  const movies = useSelector((state) => state.movies);
  const display = useSelector((state) => state.display);

  const dispatch = useDispatch();

  const dispatchFetchMovies = (input) => {
    dispatch(fetchMovies(input));
  };

  const dispatchQuery = (input) => {
    dispatch(setQuery(input));
  };

  const dispatchDisplay = (input) => {
    dispatch(setDisplay(input));
  };

  const trailerHandler = async (input) => {
    let result;
    if (input.media_type === "movie") {
      result = await dispatch(fetchMovieTrailer(input.id));
    }
    if (input.media_type === "tv") {
      result = await dispatch(fetchShowTrailer(input.id));
    }
    return result;
  };

  return (
    <div className="App">
      <SiteNavbar logo={logo} />
      <Container>
        <div className="search-container">
          <SearchContainer
            query={query}
            dispatchQuery={dispatchQuery}
            fetchMovies={dispatchFetchMovies}
          />
        </div>

        <div className="nav-pills">
          <NavPills movies={movies} dispatchDisplay={dispatchDisplay} />
        </div>

        <div className="search-list">
          <SearchList display={display} trailerHandler={trailerHandler} />
        </div>
      </Container>
    </div>
  );
}

export default App;
