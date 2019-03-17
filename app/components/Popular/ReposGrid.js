import React from "react";
import PropTypes from "prop-types";

function ReposGrid(props) {
  return (
    <div className="repo-grid">
      {props.repositories.map((repository, index) => (
        <div className="repo-grid__item" key={index}>
          <div className="repo-grid__avatar-container">
            <img
              src={repository.owner.avatar_url}
              alt={"Owner avatar"}
              className="repo-grid__avatar-image"
            />
          </div>
          <div>
            <a
              className="repo-grid__link"
              target="_blank"
              href={repository.html_url}
            >
              {repository.name}
            </a>
          </div>
          <div className="repo-grid__owner-login">
            @{repository.owner.login}
          </div>
          <div className="repo-grid__stars">
            {repository.stargazers_count} stars
          </div>
        </div>
      ))}
    </div>
  );
}

ReposGrid.propTypes = {
  repositories: PropTypes.array.isRequired
};

export default ReposGrid;
