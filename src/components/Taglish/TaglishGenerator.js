import React, { Component } from "react";
import { Taglish } from "./TaglishData";
import EvaluatingTextBox from "./EvaluatingTextBox";
import TaglishGeneratorIntro from "./TaglishGeneratorIntro";
import styled from "styled-components";

export default class TaglishGenerator extends Component {
  state = {
    taglish: Taglish,
    progress: 0,
    answer1: "Hello",
    answer2: "",
    counter: 1,
    currentAnswers: [],
    intro: true
    //push correct answers to this array.
  };

  //Reminders
  //word is a

  //handleChange is run when anything is entered into textbox.
  //the handleChange changes the state everytime something is entered. This is one fast blockchain.
  handleChange = (event, word) => {
    //extract the values. event.target.name && event.target.value
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log("BLAHHHHHH!!!!!!", word);
    if (word === value && this.state.currentAnswers.includes(word) === false) {
      this.setState({
        //this will concatinate the word
        currentAnswers: this.state.currentAnswers.concat(word)
      });
    }
    if (
      this.state.currentAnswers.length >=
      this.state.taglish[this.state.progress].taglishWords.length
    ) {
      this.setState(prevState => {
        return {
          progress: prevState.progress + 1
        };
      });
    }
  };

  checkAnswer = (currentAnswers, word) => {
    console.log(currentAnswers.includes(word));
    console.log(word);
  };

  //A componet that gets the values as props and maps it for each element in the array.

  render() {
    console.log("length of current answer", this.state.currentAnswers.length);
    console.log(
      "number of questions",
      this.state.taglish[this.state.progress].taglishWords.length
    );

    const {
      progress,
      answer1,
      answer2,
      counter,
      taglish,

      currentAnswers
    } = this.state;

    const textBoxes = this.state.taglish[progress].taglishWordsInFilipino.map(
      word => {
        return (
          <React.Fragment>
            <EvaluatingTextBox
              progress={progress}
              taglish={taglish}
              answer1={answer1}
              answer2={answer2}
              counter={counter}
              handleChange={this.handleChange}
              word={word}
              checkAnswer={this.checkAnswer}
              currentAnswers={currentAnswers}
            />
          </React.Fragment>
        );
      }
    );
    if (this.state.intro === false) {
      return (
        <div className="row d-flex justify-content-center w-100vh">
          {" "}
          <TaglishGeneratorIntro />
        </div>
      );
    } else {
      return (
        <TaglishGen>
          <h2 className="header">replace the taglish</h2>
          <div className="body">
            <h3>{taglish[progress].taglish}</h3>
            {textBoxes}

            <p>
              Replace these common taglish words with their filipino equivlents
              to improve your vocabulary.
            </p>
          </div>
        </TaglishGen>
      );
    }
  }
}

const TaglishGen = styled.div`
  display: grid;
  height: 75vh;
  grid-template-columns: repeat(1fr 3);
  grid-template-areas:
    "header header header"
    "body body body"
    "picture picture picture";

  .header {
    grid-area: header;
    font-size: 2rem;
    text-transform: capitalize;
    justify-self: center;
  }
  .body {
    grid-area: body;

    input[type="text"] {
      border: none;
      border-bottom: 1px solid lightgray;

      width: 75%;
      text-align: center;
      &:focus {
        outline: none;
      }
    }
  }
`;
