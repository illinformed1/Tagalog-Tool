import React, { Component } from "react";

export default class TextBox extends Component {
  render() {
    const { name, handleChange, value } = this.props;
    return (
      <React.Fragment>
        <input value={value} name={name} onChange={handleChange} />
      </React.Fragment>
    );
  }
}
