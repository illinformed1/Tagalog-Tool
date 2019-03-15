import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    const { toggleText, addTranslation, finalCommit } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-outline-dark mr-2" onClick={toggleText}>
          New
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={addTranslation}>
          {" "}
          Add A Translation
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={finalCommit}>
          Commit
        </button>
      </React.Fragment>
    );
  }
}
