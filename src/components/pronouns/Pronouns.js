import React from "react";
import { pronounData } from "./pronounData";
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
      <div className="container">
        <h3>Study The Pronouns</h3>
        <div className="d-flex align-items-center">
          {pronounData.map(pronoun => {
            const { id } = pronoun;

            return (
              <div className="row">
                {this.state.testingEnglish === true &&
                this.state.testingTagalog === false ? (
                  <input
                    type="text"
                    className="col-10 justify-content-center mb-1"
                    onChange={e =>
                      this.handleChange(pronoun.id, pronoun.english, e)
                    }
                  />
                ) : (
                  <div className="col-4 mb-1">{pronoun.english}</div>
                )}
                {console.log(this.state.data[id].correct)}
                {this.state.data[id].correct === true ? (
                  <i className="fas fa-check" style={{ color: "green" }} />
                ) : (
                  <p />
                )}
                {/* End of English Test */}
                {this.state.testingTagalog === true &&
                this.state.testingEnglish === false ? (
                  <input
                    type="text"
                    className="col-4 mb-1"
                    onChange={e =>
                      this.handleChange(pronoun.id, pronoun.tagalog, e)
                    }
                  />
                ) : (
                  <div className="col-4 mb-1">{pronoun.tagalog}</div>
                )}
              </div>
            );
          })}

          <button className="btn btn-primary mt-4" onClick={this.testingBtnEng}>
            Test Your English
          </button>
          <button className="btn btn-success mt-4" onClick={this.testingBtnTag}>
            Test Your Tagalog
          </button>
        </div>
      </div>
    );
  }
}
