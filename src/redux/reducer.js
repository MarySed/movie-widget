const initialState = {
  movies: null,
  query: "Lion King",
  actors: null,
  trailer: null,
  search: ["movie", "tv", "person"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.input };

    case "SET_QUERY":
      return { ...state, query: action.input };

    case "SET_ACTORS":
      return { ...state, actors: action.input };

    case "SET_TRAILER":
      return { ...state, trailer: action.input };

    case "SET_SEARCH":
      return { ...state, search: action.input };

    default:
      return state;
  }
};

export default reducer;
