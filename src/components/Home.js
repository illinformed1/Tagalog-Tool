import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid vh-100 d-flex">
        <div className="row">
          <div className="col-12 d-inline-block ">
            <Button>
              <NavLink to="/taglishgenerator" className="link">
                <i style={{ fontSize: "10rem" }} className="fas fa-cogs icon" />
              </NavLink>
              <h3>Taglish Generator</h3>
            </Button>

            <Button>
              <NavLink to="/questionare" className="link">
                <i
                  style={{ fontSize: "10rem" }}
                  className="fas fa-brain icon"
                />
              </NavLink>
              <h3>Vocabulary</h3>
            </Button>

            <Button>
              <NavLink to="/pronouns" className="link">
                <i
                  style={{ fontSize: "10rem" }}
                  className="fas fa-user-tag icon"
                />
              </NavLink>
              <h3>Pronouns</h3>
            </Button>

            <Button>
              <NavLink to="/verb" className="link">
                <i style={{ fontSize: "10rem" }} className="fas fa-key icon" />
              </NavLink>
              <h3>Card Game</h3>
            </Button>

            <Button>
              <NavLink to="/verb" className="link">
                <i style={{ fontSize: "10rem" }} className="fas fa-key lock" />
              </NavLink>
              <h3>Speaking Exercises</h3>
            </Button>

            <Button>
              <NavLink to="/verb" className="link">
                <i style={{ fontSize: "10rem" }} className="fas fa-key lock" />
              </NavLink>
              <h3>Story Time</h3>
            </Button>

            <Button>
              <NavLink to="/verb" className="link">
                <i style={{ fontSize: "10rem" }} className="fas fa-key lock" />
              </NavLink>
              <h3>Verbs</h3>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const Button = styled.div`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 40px;
  height: 15rem;
  width: 20rem;
  margin: 2rem 2rem;
  text-align: center;
  font-family: var(--sub-font);
  background: #428bca;
  transition: all 1.5s;
  &:hover {
    background-color: purple;
    border: none;
  }
  h3 {
    color: white;
  }
  .link {
    color: orange;
    text-decoration: none;
  }

  .icon {
    margin-top: 1rem;
  }
  .lock {
    color: #ffa366;
    margin-top: 1rem;
  }
`;
