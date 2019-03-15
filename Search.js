import React, { Component } from "react";

export default class Search extends Component {
  state = {
    words: this.props.words,
    searchQuery: "",
    searchResult: [],
    toggleSearchBox: true
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  };

  filterIt = (arr, searchKey) => {
    const filteredObj = arr.filter(obj =>
      Object.keys(obj).some(key => obj[key].includes(searchKey))
    );
    this.setState({ searchResult: filteredObj });
  };

  render() {
    console.log(this.props);

    const searchMapping = this.state.searchResult.map(
      ({ english, filipino }) => (
        <SearchResult english={english} filipino={filipino} />
      )
    );
    return (
      <div>
        {!this.props.toggleText && (
          <div>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.searchQuery}
            />

            <button
              className="btn btn-outline-dark mx-2 my-2"
              onClick={() =>
                this.filterIt(this.props.words, this.state.searchQuery)
              }
            >
              Seach
            </button>
          </div>
        )}

        {this.state.toggleSearchBox && searchMapping}
        {console.log(this.state.searchResult)}
      </div>
    );
  }
}

class SearchResult extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row border border-dark">
            <div className="col-6">{this.props.english}</div>
            <div className="col-6">{this.props.filipino}</div>
          </div>
        </div>
      </div>
    );
  }
}
