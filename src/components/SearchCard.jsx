import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowTrailer, fetchMovieTrailer } from "../redux/actions";
import { Card, Row, Col, Nav, ListGroupItem } from "react-bootstrap";
import Pill from "./NavPill";
import Rating from "./Rating";
import LinkButton from "./LinkButton";
import Poster from "./Poster";

export default function SearchCard({ movie, trailerHandler }) {
  const query = useSelector((state) => state.query);
  const [url, setURL] = useState("");

  useEffect(() => {
    const assignURL = async () => {
      const result = await trailerHandler(movie);
      setURL(result);
    };

    if (query !== "" && movie.media_type !== "person") {
      assignURL();
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
      return <Pill title={"Person"} />;
    }
    if (movie.media_type === "movie") {
      return <Pill title={"Movie"} />;
    }
    return <Pill title={"Show"} />;
  };

  //Render Either Date (there were too many options for this) or Gender
  const renderDateGender = () => {
    if (movie.first_air_date) {
      return <Card.Text>Release Date: {movie.first_air_date}</Card.Text>;
    }
    if (movie.release_date) {
      return <Card.Text>Release Date: {movie.release_date}</Card.Text>;
    }
    if (movie.gender === 2) {
      return <Card.Text>Gender: Male</Card.Text>;
    }
    if (movie.gender === 1) {
      return <Card.Text>Gender: Female</Card.Text>;
    }
    return null;
  };

  //Remove search results with no poster provided
  return movie.poster_path || movie.profile_path ? (
    //Card Results
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
              <Col md={1} className="card__desc-pill-col">
                <Nav variant="pills">{renderPill()}</Nav>
              </Col>
              <Col className="card__desc-date-col">{renderDateGender()}</Col>
            </Row>
            <Card.Text className="card__desc-mov">{movie.overview}</Card.Text>
          </Card.Body>
          <Card.Body className="movie-ratings card__desc-body">
            <Row>
              <Col md={4} className="card__desc-rate">
                <Rating rating={movie.vote_average} />
              </Col>

              <Col md={8} className="card__desc-trailer">
                <LinkButton url={url} id={movie.id} />
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </ListGroupItem>
  ) : null;
}
