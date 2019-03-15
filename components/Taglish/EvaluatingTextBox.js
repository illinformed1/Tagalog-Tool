import React, { Component } from "react";

export default class EvaluatingTextBox extends Component {
  render() {
    {
      /*This is what I have got. 

I should make the textboxes here and have them call functions that are passed down as props

*/
    }
    const {
      progress,
      checkAnswer,
      handleChange,
      answer1,
      answer2,
      counter,
      word,
      taglish,
      currentAnswers
    } = this.props;
    let textBox1or2 = taglish[0].taglishWordsInFilipino.indexOf(word);

    return (
      <div>
        <p className="mb-3 mt-3 ">Enter The Filipino Equivilent:</p>
        {console.log(currentAnswers)}
        <input
          type="text"
          placeholder={taglish[0].taglishWords[textBox1or2]}
          onChange={event => {
            handleChange(event, word);
            checkAnswer(word);
          }}
        />
        {currentAnswers.includes(word) === true ? (
          <span className="mx-2" style={{ color: "green" }}>
            <i className="fas fa-check-square" />
          </span>
        ) : (
          <span className="mx-2" style={{ color: "red" }}>
            <i class="fas fa-times-circle" />
          </span>
        )}
      </div>
    );
  }
}
