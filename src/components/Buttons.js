import React, { Component } from "react";
import styled from "styled-components";

export default class Buttons extends Component {
  render() {
    const { toggleText, addTranslation, finalCommit } = this.props;
    return (
      <React.Fragment>
        <Button onClick={toggleText}>New</Button>
        <Button onClick={addTranslation}> Add A Translation</Button>
        <Button onClick={finalCommit}>Commit</Button>
      </React.Fragment>
    );
  }
}

const Button = styled.div`
  color: green;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
