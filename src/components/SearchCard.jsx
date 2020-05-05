import React, { useEffect, useState } from "react";
import { Card, Row, Col, Nav, ListGroupItem } from "react-bootstrap";
import Rating from "./Rating";
import LinkButton from "./LinkButton";
import Poster from "./Poster";

export default function SearchCard({
  movie,
  trailerHandler,
  actorHandler,
  search,
  query,
}) {
  const [url, setURL] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const assignURL = async () => {
      const result = await trailerHandler(movie);
      setURL(result);
    };

    const assignBio = async () => {
      const result = await actorHandler(movie);
      setBio(result);
    };

    if (movie.media_type !== "person" && movie.poster_path) {
      //Filtering out results without an img, so I want to prevent unneeded api calls
      assignURL();
    }
    if (movie.media_type === "person" && movie.profile_path) {
      //Filtering out results without an img so I want to prevent unneeded api calls
      assignBio();
    }
  }, [query]);

  //Render Title
  const renderTitle = () => {
    if (movie.media_type === "person") {
      return <Card.Title>{movie.name}</Card.Title>;
    }
    if (movie.original_name) {
      return <Card.Title>{movie.original_name}</Card.Title>;
    }
    return <Card.Title>{movie.title}</Card.Title>;
  };

  //Render Movie/Show/Person Pill
  const renderPill = () => {
    if (movie.media_type === "person") {
      return <Nav.Link>Person</Nav.Link>;
    }
    if (movie.media_type === "movie") {
      return <Nav.Link>Movie</Nav.Link>;
    }
    return <Nav.Link>Show</Nav.Link>;
  };

  //Render Either Date (some movies only had one or the other) or Gender
  const renderDateGender = () => {
    let newDate;
    if (movie.first_air_date) {
      newDate = movie.first_air_date.replace(/-/g, "/");
      return <Card.Text>Release Date: {newDate}</Card.Text>;
    }
    if (movie.release_date) {
      newDate = movie.release_date.replace(/-/g, "/");
      return <Card.Text>Release Date: {newDate}</Card.Text>;
    }
    if (movie.gender === 2) {
      return <Card.Text>Gender: Male</Card.Text>;
    }
    if (movie.gender === 1) {
      return <Card.Text>Gender: Female</Card.Text>;
    }
    return null;
  };

  //Remove search results with no poster provided, and implement client-side filter
  return (search.includes(movie.media_type) && movie.poster_path) ||
    (search.includes(movie.media_type) && movie.profile_path) ? (
    <ListGroupItem className="card">
      <Row className="card__main-row no-gutters">
        <Col md={3} className="card__img-col">
          {movie.poster_path ? (
            <Poster
              url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ) : (
            <Poster
              url={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
            />
          )}
        </Col>

        <Col md={9} className="card__desc-main-col">
          <Card.Body className="card__desc-body-title">
            {renderTitle()}
            <Row className="card__desc-body-row">
              <Col md={2} className="card__desc-pill-col">
                <Nav variant="pills" className={"card__movie-pill"}>
                  <Nav.Item>{renderPill()}</Nav.Item>
                </Nav>
              </Col>
              <Col className="card__desc-date-col">{renderDateGender()}</Col>
            </Row>
            <Card.Text className="card__desc-mov">
              {movie.media_type === "movie" || movie.media_type === "tv"
                ? movie.overview
                : bio}
            </Card.Text>
          </Card.Body>
          {movie.media_type !== "person" ? (
            <Card.Body className="movie-ratings card__desc-body">
              <Row>
                <Col md={4} className="card__desc-rate">
                  <Rating rating={movie.vote_average} />
                </Col>

                <Col md={8} className="card__desc-trailer">
                  <LinkButton
                    url={url}
                    id={movie.id}
                    title={
                      url !== undefined ? "Play Trailer" : "Trailer Unavailable"
                    }
                  />
                </Col>
              </Row>
            </Card.Body>
          ) : null}
        </Col>
      </Row>
    </ListGroupItem>
  ) : null;
}
