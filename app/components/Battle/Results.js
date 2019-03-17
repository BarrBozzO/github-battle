import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import Profile from "./Profile";
import api from "../../utils/api";
import Loading from "../Loading";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }
  componentDidMount() {
    const players = queryString.parse(this.props.location.search);
    api.battle([players.player1, players.player2]).then(results => {
      if (results === null) {
        return this.setState(function() {
          return {
            error: "Github API error",
            loading: false
          };
        });
      }

      this.setState({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false
      });
    });
  }
  render() {
    const { error, winner, loser, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Profile label="winner" score={winner.score} info={winner.profile} />
        <Profile label="loser" score={loser.score} info={loser.profile} />
      </div>
    );
  }
}

export default Results;
