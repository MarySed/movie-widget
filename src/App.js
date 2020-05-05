//Library Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux actions
import {
  setQuery,
  fetchMovies,
  fetchMovieTrailer,
  fetchShowTrailer,
  fetchActorBio,
  setSearch,
  fetchTrending,
} from "./redux/actions";

//Components
import SearchContainer from "./components/SearchContainer";
import SearchList from "./components/SearchList";
import NavPills from "./components/NavPills";

//Bootstrap and Style
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

import logo from "./assets/Logo.svg";
import SiteNavbar from "./components/Navbar";

function App() {
  const query = useSelector((state) => state.query);
  const movies = useSelector((state) => state.movies);
  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const tabHandler = () => {
    if (search.includes("movie") && search.includes("person")) {
      return true;
    }
    return false;
  };

  const dispatchFetchMovies = async (input) => {
    dispatch(fetchMovies(input));
  };

  const dispatchQuery = (input) => {
    dispatch(setQuery(input));
  };

  const trendingHandler = async (input) => {
    let result;
    if (movies === null) {
      result = await dispatch(fetchTrending());
    }

    return result;
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

  const actorHandler = async (input) => {
    let result;
    if (input.media_type === "person") {
      result = await dispatch(fetchActorBio(input.id));
    }
    return result;
  };

  const searchHandler = async (input) => {
    dispatch(setSearch(input));
  };

  return (
    <div className="App">
      <SiteNavbar logo={logo} />
      <Container fluid={true}>
        <div className="search-container">
          <SearchContainer
            query={query}
            dispatchQuery={dispatchQuery}
            fetchMovies={dispatchFetchMovies}
            searchHandler={searchHandler}
            trendingHandler={trendingHandler}
            movies={movies}
          />
        </div>

        <div className="nav-pills">
          <NavPills
            movies={movies}
            searchHandler={searchHandler}
            tabHandler={tabHandler}
          />
        </div>

        <div className="search-list">
          <SearchList
            trailerHandler={trailerHandler}
            actorHandler={actorHandler}
            movies={movies}
            search={search}
            query={query}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
