import React, { Component } from "react";
import { Taglish } from "./TaglishData";
import EvaluatingTextBox from "./EvaluatingTextBox";

export default class TaglishGenerator extends Component {
  state = {
    taglish: Taglish,
    progress: 0,
    answer1: "Hello",
    answer2: "",
    counter: 1,
    currentAnswers: []
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

    return (
      <div className="row vh-100 d-flex align-items-center">
        <div className="col-10 d-flex flex-column align-items-center mx-auto">
          <div className="card d-flex flex-column align-items-center">
            <h2 className="text-capitalize card-header w-100 mx-auto">
              replace the taglish
            </h2>
            <h3>{taglish[progress].taglish}</h3>
            {textBoxes}
            <p className="card-footer mt-3">
              Replace these common taglish words with their filipino equivlents
              to improve your vocabulary.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
