import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Response from "../../Response";
import "./SearchPage.css";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchPage() {
  const [{ term="Tesla" }, dispatch] = useStateValue();

  // LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div>
      <div className="nav__header">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="nav__header--body">
          <Search hideButtons />

          <div className="search__options">
            <div className="search__options--left">
              <div className="search__option">
                <FontAwesomeIcon icon="fa-search" />
                <Link to="/all">All</Link>
              </div>
              <div className="search__option">
                <FontAwesomeIcon icon="fa-search" />
                <Link to="/News">News</Link>
              </div>
              <div className="search__option">
                <FontAwesomeIcon icon="fa-search" />
                <Link to="/Images">Images</Link>
              </div>
              <div className="search__option">
                <FontAwesomeIcon icon="fa-search" />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="search__option">
                <FontAwesomeIcon icon="fa-search" />
                <Link to="/maps">maps</Link>
              </div>
              <div className="search__option">
                <FontAwesomeIcon icon="fa-search" />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="search__options--right">
              <div className="search__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="page__results">
          <p className="page__results--count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for
            {term}
          </p>

          {data?.items.map((item) => (
            <div className="page__result">
              <a className="page__url" href={item.link}>
                <img
                  className="page__img"
                  src={
                    item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src
                  }
                  alt=""
                />
                {item.displayLink}
              </a>
              <a href={item.link}>
                <h2 className="page__title">{item.title}</h2>
              </a>
              <p className="page__result--snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
