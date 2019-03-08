import React, { Component } from "react";
import VocabList from "./VocabList";

export default class Vocabulary extends Component {
  state = {
    vocabulary: [],
    translation: [],
    userAnswer: "",
    count: 0,
    closed: false
  };

  buttonClick = () => {
    const { userAnswer } = this.state;
    this.setState(previousState => ({
      vocabulary: [...previousState.vocabulary, userAnswer]
    }));
  };

  toggleClose = () =>
    this.setState(prev => {
      return { closed: !prev.closed };
    });

  handleDelete = word => {
    console.log(word);
    let newWords = this.state.vocabulary.filter(e => e !== word);
    this.setState({ vocabulary: newWords });
  };

  handleChange = e => {
    this.setState({ userAnswer: e.target.value });
  };

  render() {
    console.log(this.state);
    const { vocabulary } = this.state;
    const VocabWords = vocabulary.map((word, index) => {
      return (
        !this.state.closed && (
          <VocabList word={word} key={index}>
            {({ confidence, handleMouseHover, isHovering }) => (
              <div>
                <input
                  //Always include a margin. Can mess with state if mouse is over two text-boxes at once.
                  className="my-4 border-top-0 border-left-0 border-right-0 border-dark "
                  type="text"
                  defaultValue={this.state.vocabulary[index]}
                  onMouseEnter={handleMouseHover}
                  onMouseLeave={handleMouseHover}
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-outline-dark mx-2"
                  onClick={() => this.handleDelete(word)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
                <button onClick={confidence}>Confidence</button>
                {isHovering && <div>Hovering right meow! 🐱</div>}
              </div>
            )}
          </VocabList>
        )
      );
    });

    return (
      <div>
        {VocabWords}

        <button
          onClick={this.buttonClick}
          type="button"
          className="btn btn-outline-dark d-flex mt-2"
        >
          Add
        </button>
        {this.state.closed === false ? (
          <button
            onClick={this.toggleClose}
            type="button"
            className="btn btn-outline-dark d-flex mt-2"
          >
            Close
          </button>
        ) : (
          <button
            onClick={this.toggleClose}
            type="button"
            className="btn btn-outline-dark d-flex mt-2"
          >
            Open
          </button>
        )}

        <p>{this.state.vocabulary}</p>
      </div>
    );
  }
}
