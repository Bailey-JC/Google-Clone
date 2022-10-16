import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("hit search");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });

    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <FontAwesomeIcon icon="fa-search" />
        <input
          className="search__input--bar"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <FontAwesomeIcon icon="fa-microphone" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="subit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttons--hidden"
            type="subit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttons--hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
