import React, { Component } from "react";

import TaglishGenerator from "./components/Taglish/TaglishGenerator";
import Questionare from "./components/sentence testing/Questionare";
import Pronouns from "./components/pronouns/Pronouns";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import VocabList from "./components/VocabList";
import VerbTense from "./components/verbs/VerbTense";

export default class App extends Component {
  render() {
    return (
      <div className=" container vh-100">
        <div className="d-flex">
          <VocabList />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/questionare" component={Questionare} />
          <Route path="/taglishgenerator" component={TaglishGenerator} />
          <Route path="/pronouns" component={Pronouns} />
          <Route path="/verb" component={VerbTense} />
        </Switch>
      </div>
    );
  }
}
