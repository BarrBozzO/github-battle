import React, { Component } from "react";
import PropTypes from "prop-types";

class PlayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ username: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const state = this.state;
    this.props.onSubmit(state.id, state.username);
  }
  render() {
    return (
      <div className="player-form">
        <h2 className="player-form__header">{this.props.label}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              autoComplete="off"
              value={this.state.username}
              placeholder="github login"
              className="input player-form__input"
              onChange={this.handleChange}
            />
          </div>
          <div className="player-form__button-container">
            <button
              type="submit"
              className="button button-default"
              disabled={!this.state.username}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

PlayerForm.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

PlayerForm.defaultProps = {
  label: "Username"
};

export default PlayerForm;
