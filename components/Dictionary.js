import React, { Component } from "react";

export default class Dictionary extends Component {
  state = {
    english: this.props.english,
    filipino: this.props.filipino
  };

  render() {
    return (
      <div className="container">
        <div className="row border border-dark">
          <div className="col-6">{this.state.english}</div>
          <div className="col-6">{this.state.filipino}</div>
        </div>
      </div>
    );
  }
}
