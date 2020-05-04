const initialState = {
  movies: null,
  query: "Lion King",
  display: null,
  actors: null,
  trailer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.input };

    case "SET_MOVIES_FAILURE":
      return { ...state, movies: action.input };

    case "SET_QUERY":
      return { ...state, query: action.input };

    case "SET_DISPLAY":
      return { ...state, display: action.input };

    case "SET_ACTORS":
      return { ...state, actors: action.input };

    case "SET_TRAILER":
      return { ...state, trailer: action.input };

    default:
      return state;
  }
};

export default reducer;
