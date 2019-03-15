import React, { Component } from "react";

export default class QuestionBox extends Component {
  render() {
    const { userAnswer, handleChange, complete, disabled } = this.props;
    const { img } = this.props.question;
    console.log(this.props.question);
    //return this.props.question.id === this.props.progress ? (
    //
    //okay i have an array of words. is [this.props.question.id]

    return (
      <div>
        <br />
        {console.log(complete)}
        <div className="row w-100">
          <div className="col-6">
            <img src={img} alt="I" className="w-100" />
          </div>
          <div className="col-6 h-100 my-auto">
            <h4>
              Rewrite the following in Filipino: {"  "}
              <h3 className="text-primary text-capitalize mt-3">
                {this.props.question.word}
              </h3>
            </h4>
            <div className=" mx-auto">
              <input
                className="text-center"
                type="text"
                onChange={handleChange}
                disabled={disabled[this.props.question.id]}
              />
            </div>

            {this.props.ImportedData[this.props.progress - 1].answer ===
            this.props.question.answer ? (
              complete === true ? (
                <span className="mr-3 mx-auto">
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "green" }}
                  />
                </span>
              ) : (
                <span className="mr-3 mx-auto">
                  <i className="fas fa-times" style={{ color: "red" }} />
                </span>
              )
            ) : null}
          </div>
        </div>
      </div>
    );
    //  ) : null; this makes everything sequential
  }
}
