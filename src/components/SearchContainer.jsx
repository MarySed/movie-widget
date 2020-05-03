import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import searchIcon from "../assets/Icons-search.svg";

export default function SearchContainer({ query, dispatchQuery, fetchMovies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    //On user query
    if (query !== "") {
      fetchMovies(query);
    }
  }, [query]);

  const handleQuery = (event) => {
    event.preventDefault();
    dispatchQuery(searchTerm);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //Local state for component style: Maybe can be abstracted to CSS
  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text className={focus ? "focused" : "not-focused"}>
          <img src={searchIcon} alt="search icon" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search for movies, TV shows, or people"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={focus ? "focused" : "not-focused"}
      />
      <InputGroup.Append>
        {searchTerm ? (
          <InputGroup.Text
            className={focus ? "focused" : "not-focused"}
            variant="outline-primary"
            onFocus={handleFocus}
            onClick={() => {
              setSearchTerm("");
            }}
          >
            Clear
          </InputGroup.Text>
        ) : null}

        <Button variant="outline-secondary" onClick={handleQuery}>
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
