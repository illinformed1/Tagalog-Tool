import React, { Component } from "react";
import QuestionBox from "./QuestionBox";
import { questions } from "./data";

export default class Questionare extends Component {
  state = {
    ImportedData: questions,
    userAnswer: "",
    progress: 1,
    complete: false,
    disabled: [true]
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ userAnswer: value });
    if (value === this.state.ImportedData[this.state.progress - 1].answer) {
      this.setState({ complete: true });
      this.setState({ disabled: this.state.disabled.concat(true) });
      setTimeout(() => {
        this.setState(prevState => {
          return {
            progress: prevState.progress + 1,
            userAnswer: "",
            complete: false
          };
        });
      }, 1200);
    }
  };

  render() {
    const {
      ImportedData,
      userAnswer,
      progress,
      complete,
      disabled
    } = this.state;
    console.log(this.state.disabled);

    //const Complete = this.state.ImportedData[this.state.process - 1].disabled;
    const Questions = ImportedData.map(question => {
      return (
        <div className="vh-100">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="card text-center mt-5">
                <QuestionBox
                  question={question}
                  userAnswer={userAnswer}
                  progress={progress}
                  handleChange={this.handleChange}
                  complete={complete}
                  ImportedData={ImportedData}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div>{Questions}</div>;
  }
}
