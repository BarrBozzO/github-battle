import React from "react";
import PropTypes from "prop-types";

import PlayerPreview from "./PlayerPreview";

function Profile(props) {
  const { label, score, info } = props;
  return (
    <div className="profile-container">
      <h2 className="profile-container__header">{label}</h2>
      <h3 className="profile-container__score">Score: {score}</h3>
      <PlayerPreview img={info.avatar_url} username={info.login}>
        <ul className="space-list-items">
          {info.name && <li>{info.name}</li>}
          {info.location && <li>{info.location}</li>}
          {info.company && <li>{info.company}</li>}
          <li>Followers: {info.followers}</li>
          <li>Following: {info.following}</li>
          <li>Public Repos: {info.public_repos}</li>
          {info.blog && (
            <li>
              <a href={info.blog}>{info.blog}</a>
            </li>
          )}
        </ul>
      </PlayerPreview>
    </div>
  );
}

Profile.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired
};

export default Profile;
