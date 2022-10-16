import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import Search from '../Search/Search'

function Home() {
  return (
    <div className="home">
      <div className="nav">
        <div className="nav__left">
          <Link className="nav__link" to="/about">
            About
          </Link>
          <Link className="nav__link" to="/store">
            Store
          </Link>
        </div>

        <div className="nav__right">
          <Link className="nav__link" to="/gmail">
            Gmail
          </Link>
          <Link className="nav__link" to="/images">
            Images
          </Link>
          <FontAwesomeIcon icon="fa-table-cells" />
          <Avatar></Avatar>
        </div>
      </div>

      <div className="home__body">
        <div className="logo__wrapper">
          <img
            className="logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
