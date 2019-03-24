import React from "react";
import { pronounData } from "./pronounData";
import styled from "styled-components";

export default class Pronouns extends React.Component {
  state = {
    data: pronounData,
    testingEnglish: false,
    testingTagalog: false,
    correct: false
  };

  testingBtnEng = () => {
    this.setState(prevState => ({ testingEnglish: !prevState.testingEnglish }));
  };

  testingBtnTag = () => {
    this.setState(prevState => ({ testingTagalog: !prevState.testingTagalog }));
  };

  handleChange = (id, pronoun, e) => {
    if (pronoun === e.target.value) {
      let copyData = JSON.parse(JSON.stringify(this.state.data));
      copyData[id].correct = true;
      this.setState({ data: copyData });
    } else {
      let copyData = JSON.parse(JSON.stringify(this.state.data));
      copyData[id].correct = false;
      this.setState({ data: copyData });
    }
  };

  /*
      let recipesCopy = JSON.parse(JSON.stringify(this.state.recipes))
   //make changes to ingredients
   recipesCopy[0].ingredients = //whatever new ingredients are
   this.setState({
      recipes:recipesCopy 
    }) 
    }*/

  /*
handleChange: function (e) {
    // 1. Make a shallow copy of the items
    let items = [...this.state.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[1]};
    // 3. Replace the property you're intested in
    item.name = 'newName';
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
},
  */

  render() {
    console.log(this.state.data);
    return (
      <PronounTable>
        <h3>Study The Pronouns</h3>
        <div>
          {pronounData.map(pronoun => {
            const { id } = pronoun;

            return (
              <div className="wrapper">
                <div className="col">
                  {this.state.testingEnglish === true &&
                  this.state.testingTagalog === false ? (
                    <div className="input">
                      <input
                        type="text"
                        onChange={e =>
                          this.handleChange(pronoun.id, pronoun.english, e)
                        }
                      />
                    </div>
                  ) : (
                    <div className="testingWord">{pronoun.english}</div>
                  )}

                  {console.log(this.state.data[id].correct)}
                  {this.state.data[id].correct === true ? (
                    <i className="fas fa-check" style={{ color: "green" }} />
                  ) : null}
                </div>

                <div>
                  {/* End of English Test */}
                  {this.state.testingTagalog === true &&
                  this.state.testingEnglish === false ? (
                    <div className="input">
                      <input
                        className="inputID"
                        type="text"
                        onChange={e =>
                          this.handleChange(pronoun.id, pronoun.tagalog, e)
                        }
                      />
                    </div>
                  ) : (
                    <div className="testingWord">{pronoun.tagalog}</div>
                  )}
                </div>
              </div>
            );
          })}
          <div className="btn-align">
            <button onClick={this.testingBtnEng}>Test Your English</button>
            <div className="spacer" />

            <button onClick={this.testingBtnTag}>Test Your Tagalog</button>
          </div>
        </div>
      </PronounTable>
    );
  }
}

const PronounTable = styled.div`
  height: 80vh;
  h3 {
    text-align: center;
    margin: 2rem;
    color: orange;
  }
  .btn-align {
    width: 60%;
    display: flex;
    .spacer {
      flex: 1;
    }

    button {
      background-color: #428bca;
      border: none;
      border-radius: 1rem;
      color: white;
      margin: 2rem;
    }
  }
  .wrapper {
    width: 50%;
    display: flex;
  }
  .testingWord {
    color: green;
    max-width: 0.5rem;
    margin: 2rem;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 2rem;
    input[type="text"] {
      border: none;
      border-bottom: 1px solid lightgray;

      &:focus {
        outline: none;
        cursor: none;
        color: none;
      }
    }
  }
`;
