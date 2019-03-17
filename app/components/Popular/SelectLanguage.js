import React from "react";
import PropTypes from "prop-types";

function SelectLanguage(props) {
  const languages = ["All", "PHP", "Python", "C#"];
  const { currentLanguage, onSelect } = props;

  return (
    <ul className="languages">
      {languages.map(language => (
        <li
          onClick={onSelect.bind(null, language)}
          key={language}
          className={`languages__item ${
            currentLanguage === language ? "languages__item_current" : ""
          }`}
        >
          {language}
        </li>
      ))}
    </ul>
  );
}

SelectLanguage.propTypes = {
  onSelect: PropTypes.func.isRequired,
  currentLanguage: PropTypes.string.isRequired
};

export default SelectLanguage;
