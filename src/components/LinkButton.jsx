import React, { useState } from "react";
import playButton from "../assets/play-solid.svg";
//These were part of a solution to only call the video API on click.
//import axios from "axios";
//const API_KEY = process.env.REACT_APP_API_KEY;

export default function LinkButton(props) {
  /*
  //This was a  quick solution for making less API calls.

  const clickHandler = async (event, input) => {
    event.preventDefault();

    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${input}/videos?api_key=${API_KEY}&language=en-US`
      );

      if (result.data.results.length > 1) {
        let url = `https://www.youtube.com/watch?v=${result.data.results[0].key}`;
        window.open(url);
        return setActive(true);
      }

      return setActive(false);
    } catch (error) {
      console.error(error);
    }
  };

  */

  return (
    <a
      href={props.url !== undefined ? props.url : "#"}
      className={
        props.url !== undefined
          ? "btn btn-info card__button"
          : "btn btn-info card__button disabled"
      }
      role="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={playButton} alt="play button" width="15" />
      {props.title}
    </a>
  );
}
