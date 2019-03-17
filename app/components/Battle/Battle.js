import React, { Component } from "react";
import { Link } from "react-router-dom";

import PlayerForm from "./PlayerForm";
import PlayerPreview from "./PlayerPreview";

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: {
        username: "",
        img: null
      },
      player2: {
        username: "",
        img: null
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    const state = this.state;

    state[id] = {
      username,
      img: "https://github.com/" + username + ".png?size=200"
    };

    this.setState(state);
  }

  handleReset(id) {
    const state = this.state;

    state[id] = { username: "", img: null };

    this.setState(state);
  }

  render() {
    const player1 = this.state.player1,
      player2 = this.state.player2;
    return (
      <div className="battle-container">
        <div className="row">
          {player1.username === "" ? (
            <PlayerForm
              id={"player1"}
              label="Player #1"
              onSubmit={this.handleSubmit}
            />
          ) : (
            <PlayerPreview
              id={"player1"}
              username={player1.username}
              img={player1.img}
            >
              <button
                className="button player-preview__button-reset"
                onClick={this.handleReset.bind(null, "player1")}
              >
                reset
              </button>
            </PlayerPreview>
          )}
          {player2.username === "" ? (
            <PlayerForm
              id={"player2"}
              label="Player #2"
              onSubmit={this.handleSubmit}
            />
          ) : (
            <PlayerPreview
              id={"player2"}
              username={player2.username}
              img={player2.img}
              onReset={this.handleReset}
            >
              <button
                className="button player-preview__button-reset"
                onClick={this.handleReset.bind(null, "player2")}
              >
                reset
              </button>
            </PlayerPreview>
          )}
        </div>
        {player1.username !== "" && player2.username !== "" ? (
          <div className="battle-container__button-container">
            <Link
              className="button button-default battle-container__button"
              to={{
                pathname: this.props.match.url + "/results",
                search: `?player1=${player1.username}&player2=${
                  player2.username
                }`
              }}
            >
              &#128128; Fight
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Battle;
