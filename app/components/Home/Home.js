import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Github Battle</h1>
        <div className="home-container__description">
          <p className="home-container__description-text">
            <span className="highlight">Battle</span> - compare two github
            accounts by score.
          </p>
          <p className="home-container__description-text">
            <span className="highlight">Popular</span> - get the most popular
            github repos.
          </p>
        </div>

        <Link
          className="button button-default home-container__button"
          to="/battle"
        >
          Battle
        </Link>
      </div>
    );
  }
}

export default Home;
