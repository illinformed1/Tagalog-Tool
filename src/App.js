import React, { Component } from "react";

import TaglishGenerator from "./components/Taglish/TaglishGenerator";
import Questionare from "./components/sentence testing/Questionare";
import Pronouns from "./components/pronouns/Pronouns";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Vocabulary from "./components/Vocabulary";

export default class App extends Component {
  render() {
    return (
      <div className=" container vh-100">
        <Vocabulary />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/questionare" component={Questionare} />
          <Route path="/taglishgenerator" component={TaglishGenerator} />
          <Route path="/pronouns" component={Pronouns} />
        </Switch>
      </div>
    );
  }
}
