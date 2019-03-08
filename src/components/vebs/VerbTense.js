import React, { Component } from "react";
import { Roots } from "./rootData";
import "./verbTense.css";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

export default class VerbTense extends Component {
  state = {
    progress: 0,
    root: Roots,
    answer: "",
    mag: "mag",
    nag: "nag",
    correct: null,
    tense: null
  };

  setTense = () => {
    const tenseDecide = Math.floor(Math.random() * 9 + 1);
    if (tenseDecide > 0 && tenseDecide < 3) {
      this.setState({ tense: "future" });
    } else if (tenseDecide > 3 && tenseDecide < 6) {
      this.setState({ tense: "past" });
    } else {
      this.setState({ tense: "present" });
    }
  };

  checkAnswer = () => {
    if (
      this.state.answer ===
      this.state.root[this.state.progress][this.state.tense]
    ) {
      this.setState(prevState => {
        return { correct: true, progress: prevState.progress + 1, answer: "" };
      });
      this.setTense();
    } else {
      this.setState({ correct: false });
    }
  };

  addMag = id => {
    this.setState(prevState => {
      return { answer: prevState.mag + prevState.answer, correct: null };
    });
  };

  addNag = id => {
    this.setState(prevState => {
      return { answer: prevState.nag + prevState.answer, correct: null };
    });
  };

  insertRoot = id => {
    this.setState(prevState => {
      return { answer: prevState.root[id].root, correct: null };
    });
  };
  doubbleFirst = id => {
    this.setState(prevState => {
      return {
        answer: prevState.root[id].firstSyllable + prevState.answer,
        correct: null
      };
    });
  };

  componentDidMount() {
    this.setTense();
  }

  render() {
    const style = { fontFamily: "monospace" };

    console.log("im the answer from inside render", this.state.answer);
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <h3 className="text-capitalize">
              Enter the {this.state.tense} Tense of These Root Words
            </h3>
            <p className="">
              Root word:{" "}
              <span className="text-warning">
                {this.state.root[this.state.progress].root}{" "}
              </span>
            </p>
            <p>User Answer:{this.state.answer}</p>

            <button
              className="btn btn-primary"
              onClick={() => this.insertRoot(this.state.progress)}
            >
              Insert Root
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.doubbleFirst(this.state.progress)}
            >
              first syllable
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.addMag(this.state.progress)}
            >
              Mag
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.addNag(this.state.progress)}
            >
              Nag
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.checkAnswer()}
            >
              Check Answer
            </button>
            {this.state.correct != null ? (
              this.state.correct === true ? (
                <i className="fas fa-check" style={{ color: "green" }} />
              ) : (
                <i className="far fa-times-circle" style={{ color: "red" }} />
              )
            ) : null}
          </div>
          <div className="col-6">
            <h3>Explination</h3>
            <p>
              Nag and Mag verbs are a good starting point for understanding
              filipino verbs. Unlike English, where verb tense is modified by
              adding or changing the end of a verb, in Filipino you prefix the
              beginning of the verb to change its tense. These Prefixes are{" "}
              <strong>Mag</strong> and <strong>Nag</strong>
            </p>
            <br />
            <p>
              English: cook<strong className="text-danger">ed</strong>
            </p>
            <p>
              Filipino: <strong className="text-danger">nug</strong>luto
            </p>

            <div>
              <Button
                color="primary"
                id="toggler"
                style={{ marginBottom: "1rem" }}
              >
                Rules
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody style={style}>
                    <p>nag + root = past tense</p>
                    <p>nag + firstSyllable + root = present</p>
                    <p>mag + firstSyllable + root = future tense</p>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
