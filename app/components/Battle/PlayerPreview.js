import React from "react";
import PropTypes from "prop-types";

function PlayerPreview(props) {
  return (
    <div className="player-preview">
      <img
        className="player-preview__image"
        src={props.img}
        alt="avatar imange"
      />
      <div className="player-preview__username">@{props.username}</div>
      <div className="player-preview__button-container">{props.children}</div>
    </div>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default PlayerPreview;
