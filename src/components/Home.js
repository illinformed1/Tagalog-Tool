import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container d-flex vh-100">
        <div className="row w-100 justify-content-center align-self-center">
          <div
            className=" col-6 col-md-4 border shadow p-3 mb-5 bg-white rounded text-center mx-3 my-3"
            style={{ height: "15rem" }}
          >
            <Link to="/taglishgenerator">
              <h2>Taglish Generator</h2>
              <i
                style={{ fontSize: "10rem", color: "orange" }}
                className="fas fa-cogs"
              />
            </Link>
          </div>

          <div
            style={{ height: "15rem" }}
            className="col-6 col-md-4 border shadow p-3 mb-5 bg-white rounded text-center mx-3 my-3 "
          >
            <Link to="/questionare">
              <h2>Vocabulary</h2>

              <i
                style={{ fontSize: "10rem", color: "orange" }}
                className="fas fa-brain"
              />
            </Link>
          </div>
          <div
            className="col-6 col-md-4 border text-center shadow p-3 mb-5 bg-white rounded mx-3 my-3 "
            style={{ height: "15rem" }}
          >
            <Link to="/pronouns">
              <h2> Pronouns</h2>
              <i
                style={{ fontSize: "10rem", color: "orange" }}
                className="fas fa-user-tag"
              />
            </Link>
          </div>
          <div
            className="col-6 col-md-4  border text-center shadow p-3 mb-5 bg-white rounded mx-3 my-3"
            style={{ height: "15rem" }}
          >
            <Link to="/verbs">
              <h2>Verbs</h2>
              <i
                style={{ fontSize: "10rem", color: "orange" }}
                className="fas fa-running"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
