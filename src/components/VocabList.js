import React, { Component } from "react";
import TextBox from "./TextBox";
import Buttons from "./Buttons";
import _ from "lodash";
import Dictionary from "./Dictionary";
import Search from "../Search";
import styled from "styled-components";

export default class VocabList extends Component {
  state = {
    EnglishText: "",
    FilipinoText: "",
    translated: [],
    selector: true,
    toggleText: false,
    openVocab: false
  };

  finalCommit = () => {
    const { EnglishText, FilipinoText, translated } = this.state;
    const copy = () => {
      var duplicateObject = JSON.parse(JSON.stringify(translated));
      duplicateObject.push({
        english: EnglishText,
        filipino: FilipinoText
      });
      return duplicateObject;
    };
    console.log(copy());
    this.setState({ translated: copy() });
  };

  openVocab = () => {
    this.setState(prev => {
      return {
        openVocab: !prev.openVocab
      };
    });
  };

  addTranslation = () => {
    this.setState({ selector: !this.state.selector });
  };

  toggleText = () => {
    this.setState({ toggleText: !this.state.toggleText });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const DictionaryMapping = this.state.translated.map(
      ({ english, filipino }) => (
        <Dictionary english={english} filipino={filipino} />
      )
    );

    const { selector, toggleText } = this.state;

    /*-- I couldn't have the parent component render the component dependent on the parent state because it deleted child state --*/

    if (this.state.openVocab === true) {
      return (
        <div>
          <button className="btn btn-outline-dark my-2 mr-2">
            <i
              className="fas fa-book"
              onClick={this.openVocab}
              style={{ fontSize: "3rem" }}
            />
          </button>
          <Search
            words={this.state.translated}
            toggleText={this.state.toggleText}
          />
          {toggleText === true ? (
            selector === true ? (
              <TextBox name={"EnglishText"} handleChange={this.handleChange} />
            ) : (
              <TextBox name={"FilipinoText"} handleChange={this.handleChange} />
            )
          ) : null}
          <Buttons
            addTranslation={this.addTranslation}
            toggleText={this.toggleText}
            finalCommit={this.finalCommit}
          />
          {DictionaryMapping}
        </div>
      );
    } else {
      return (
        <DictionarButton>
          <i
            className="fas fa-book"
            onClick={this.openVocab}
            style={{ fontSize: "3rem" }}
          />
        </DictionarButton>
      );
    }
  }
}

const DictionarButton = styled.button`
  background-color: #428bca;
  color: white;
  height: 4rem;
  border-radius: 3rem;
  border: 2px solid;
  transition: all 1.5s;
  &:hover {
    background-color: orange;
    border: 2px solid;
  }
  &:focus {
    outline: 0;
  }
`;
