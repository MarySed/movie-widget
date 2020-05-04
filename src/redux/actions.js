import axios from "axios";

export const SET_MOVIES = "SET_MOVIES";
export const SET_QUERY = "SET_QUERY";
export const SET_ACTORS = "SET_ACTORS";
export const SET_DISPLAY = "SET_DISPLAY";

const API_KEY = process.env.REACT_APP_API_KEY;

export const setMovies = (input) => ({
  type: "SET_MOVIES",
  input,
});

export const setQuery = (input) => ({
  type: "SET_QUERY",
  input,
});

export const setActors = (input) => ({
  type: "SET_ACTORS",
  input,
});

export const setDisplay = (input) => ({
  type: "SET_DISPLAY",
  input,
});

export const setTrailer = (input) => ({
  type: "SET_TRAILER",
  input,
});

export const fetchMovies = (input) => async (dispatch) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&include_adult=false`
    );

    console.log(result.data.results);
    if (result.data.results.length > 0) {
      dispatch(setMovies(result.data.results)); //Set the movies
      dispatch(setDisplay(result.data.results)); //Set the movies to be displayed as well
    }
  } catch (error) {
    console.error(`When fetching Movies ${error}`);
  }
};

export const fetchShowTrailer = (input) => async (dispatch) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/tv/${input}/videos?api_key=${API_KEY}&language=en-US`
    );

    if (result.data.results.length > 0) {
      dispatch(
        setTrailer(
          `https://www.youtube.com/watch?v=${result.data.results[0].key}`
        )
      );

      return `https://www.youtube.com/watch?v=${result.data.results[0].key}`;
    }
  } catch (error) {
    console.error(`When fetching show trailers ${error}`);
  }
};

export const fetchMovieTrailer = (input) => async (dispatch) => {
  let count = 0;
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${input}/videos?api_key=${API_KEY}&language=en-US`
    );

    if (result.data.results.length > 0) {
      dispatch(
        setTrailer(
          `https://www.youtube.com/watch?v=${result.data.results[0].key}`
        )
      );
      return `https://www.youtube.com/watch?v=${result.data.results[0].key}`;
    }
  } catch (error) {
    console.error(`When fetching movie trailers ${error}`);
  }
};

export const fetchActorBio = (input) => async (dispatch) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/person/${input}?api_key=${API_KEY}&language=en-US
      `
    );

    if (result.data.biography) {
      dispatch(setActors(result.data.biography));
      return result.data.biography;
    }
  } catch (error) {
    console.error(`When fetching bios ${error}`);
  }
};
