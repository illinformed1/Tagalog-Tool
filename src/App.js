import React, { Component } from "react";

import TaglishGenerator from "./components/Taglish/TaglishGenerator";
import Questionare from "./components/sentence testing/Questionare";
import Pronouns from "./components/pronouns/Pronouns";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import VocabList from "./components/VocabList";
import VerbTense from "./components/verbs/VerbTense";
import HomeDropdown from "./HomeDropdown";
import styled from "styled-components";

export default class App extends Component {
  state = {
    dropDownToggle: true
  };

  onMouseEnter = () => {
    const { dropDownToggle } = this.state;
    this.setState({ dropDownToggle: !dropDownToggle });
  };

  render() {
    return (
      <div className=" overflow-hidden container-fluid vw-100 vh-100">
        <div className="row">
          <div className="d-flex flex-column col-3">
            <HomeDropdown />
            <VocabList />
            <AwardButton>
              <i style={{ fontSize: "3rem" }} className="fas fa-award" />
            </AwardButton>
          </div>

          <div className="col-8">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/questionare" component={Questionare} />
              <Route path="/taglishgenerator" component={TaglishGenerator} />
              <Route path="/pronouns" component={Pronouns} />
              <Route path="/verb" component={VerbTense} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const AwardButton = styled.button`
  background-color: #428bca;
  color: white;
  height: 4rem;
  border-radius: 3rem;
  border: 2px solid;
  transition: all 1.5s;
  &:hover {
    background-color: orange;
    border: 2px solid;
  }
  &:focus {
    outline: 0;
  }
`;
