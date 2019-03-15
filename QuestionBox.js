import React, { Component } from "react";
import { question } from "./data";
import "./App.css";
import TestComplete from "./components/TestComplete";
import Pronouns from "./components/Pronouns";
import VerbTense from "./components/VerbTense";

class QuestionBox extends Component {
  state = {
    data: question,
    answerValue: "",
    correct: false,
    progress: 0
  };

  handleChange = value => {
    const updatedAnswer = value.target.value;
    this.setState({ answerValue: updatedAnswer });
    this.checkAnswer();
  };

  /*Checks an array for alternative answers*/
  checkAlternative = () => {
    if (this.state.data[this.state.progress].alternatives === true) {
      const alternative = this.state.data[
        this.state.progress
      ].alternatives.includes(this.state.answerValue.toLowerCase());
      return alternative;
    }
  };

  checkAnswer = () => {
    if (
      this.state.answerValue.toLowerCase() ===
        this.state.data[this.state.progress].answer ||
      this.checkAlternative() === true
    ) {
      console.log(this.state.answerValue);
      this.setState(prevState => ({
        correct: true,
        progress: prevState.progress + 1,
        answerValue: ""
      }));
    }
  };
  render() {
    /*Return Statement is wrapped in a conditional. Would have been nice to render a component but the logic won't allow it*/

    if (this.state.data.length > this.state.progress) {
      return (
        <div>
          <VerbTense />
          <Pronouns />
          <div className="App">
            <div className="container mt-5">
              <div className="row">
                <div className="col-10">
                  {" "}
                  <p>
                    What is {this.state.data[this.state.progress].word} in
                    Tagalog?
                  </p>
                  <input
                    type="text"
                    placeholder="Answer"
                    value={this.state.answerValue}
                    onChange={this.handleChange}
                  />
                  <span>
                    {" "}
                    {this.state.correct === true ? (
                      <i className="fas fa-check" style={{ color: "green" }} />
                    ) : (
                      <i
                        className="fas fa-times-circle"
                        style={{ color: "red" }}
                      />
                    )}
                  </span>
                  <p className="text-warning">
                    Press Space to Complete The Word
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      /* end of the if statement*/
    } else {
      return <TestComplete />;
    }
  }
}

export default QuestionBox;
