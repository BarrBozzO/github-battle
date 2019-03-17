import React, { Component } from "react";

import SelectLanguage from "./SelectLanguage";
import ReposGrid from "./ReposGrid";
import Loading from "../Loading";
import api from "../../utils/api";

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: "All",
      repositories: []
    };

    this.updateCurrentLanguage = this.updateCurrentLanguage.bind(this);
  }

  componentDidMount() {
    this.updateCurrentLanguage(this.state.currentLanguage);
  }

  componentWillUnmount() {}

  updateCurrentLanguage(language) {
    this.setState({ currentLanguage: language, repositories: [] });
    api.fetchPopularRepositories(language).then(repositories => {
      this.setState({ repositories });
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          currentLanguage={this.state.currentLanguage}
          onSelect={this.updateCurrentLanguage}
        />
        {this.state.repositories.length === 0 ? (
          <Loading />
        ) : (
          <ReposGrid repositories={this.state.repositories} />
        )}
      </div>
    );
  }
}

export default Popular;
