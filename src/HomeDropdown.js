import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class HomeDropdown extends Component {
  state = {
    openMenue: false,
    hoveringCogs: false,
    hoveringQuestionare: false,
    hoveringVerb: false,
    hoveringPronoun: false
  };

  toggleMenue = () => {
    this.setState(prev => {
      return {
        openMenue: !prev.openMenue
      };
    });
  };

  onMouseHover = name => {
    let nameSetter = "hovering" + name;
    console.log(nameSetter);
    this.setState(prev => {
      return { [nameSetter]: true };
    });
  };

  render() {
    console.log(this.state.hoveringCogs);
    if (this.state.openMenue === true) {
      return (
        <React.Fragment>
          <button
            onClick={this.toggleMenue}
            className="btn btn-outline-secondary my-2 mr-2 "
          >
            <i className="fas fa-home" />
          </button>

          {/* ----------------------Below is Taglish Generator ----------------*/}

          <div onMouseEnter={() => this.onMouseHover("Cogs")}>
            {this.state.hoveringCogs === true ? (
              <Typewriter>
                <Icon>
                  <Link to="/taglishgenerator">
                    <i className="icon fas fa-cogs" />
                  </Link>
                </Icon>
                <div className="display">
                  <h2>Taglish Generator</h2>
                </div>
              </Typewriter>
            ) : (
              <Icon>
                <Link to="/taglishgenerator">
                  <i className="icon fas fa-cogs" />
                </Link>
              </Icon>
            )}
          </div>

          {/* ----------------------Below is Questionare ----------------*/}

          <div onMouseEnter={() => this.onMouseHover("Questionare")}>
            {this.state.hoveringQuestionare === true ? (
              <Typewriter>
                <Icon>
                  <Link to="/questionare">
                    <i className=" icon1 fas fa-brain" />
                  </Link>
                </Icon>
                <div className="display">
                  <h2>Questionare</h2>
                </div>
              </Typewriter>
            ) : (
              <Icon>
                <Link to="/questionare">
                  <i className=" icon1 fas fa-brain" />
                </Link>
              </Icon>
            )}
          </div>

          {/* ----------------------Below is Pronouns ----------------*/}

          <div onMouseEnter={() => this.onMouseHover("Pronoun")}>
            {this.state.hoveringPronoun === true ? (
              <Typewriter>
                <Icon>
                  <Link to="/pronouns">
                    <i className=" icon1 fas fa-user" />
                  </Link>
                </Icon>
                <div className="display">
                  <h2>Pronouns</h2>
                </div>
              </Typewriter>
            ) : (
              <Icon>
                <Link to="/pronouns">
                  <i className=" icon1 fas fa-user" />
                </Link>
              </Icon>
            )}
          </div>

          {/* ----------------------Below is Verb ----------------*/}

          <div onMouseEnter={() => this.onMouseHover("Verb")}>
            {this.state.hoveringVerb === true ? (
              <Typewriter>
                <Icon>
                  <Link to="/verbs">
                    <i className=" icon1 fas fa-running" />
                  </Link>
                </Icon>
                <div className="display">
                  <h2>verbs</h2>
                </div>
              </Typewriter>
            ) : (
              <Icon>
                <Link to="/verbs">
                  <i className=" icon1 fas fa-running" />
                </Link>
              </Icon>
            )}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <HomeButton onClick={this.toggleMenue} className="my-2 mr-2 w-100">
          <i style={{ fontSize: "3rem" }} className="fas fa-home w-100" />
        </HomeButton>
      );
    }
  }
}

const Typewriter = styled.div`
  display: flex;
  align-items: center;
  justify-self: start !important;

  .display {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end);
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
`;

const HomeButton = styled.button`
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

const Icon = styled.div`
  display: inline-block;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  height: 5rem;
  width: 5rem;
  background: white;
  text-align: center;
  font-family: var(--sub-font);
  color: white;

  background: #fff;
  padding: 30px;

  .icon {
    font-size: 2.5rem;
    position: relative;
    right: 1rem;
    bottom: 0.5rem;
  }
  .icon1 {
    font-size: 2.5rem;
    position: relative;
    right: 0.8rem;
    bottom: 0.5rem;
  }
  .icon2 {
    font-size: 2.5rem;
    position: relative;
    right: 0.7rem;
    bottom: 0.6rem;
  }
  .icon3 {
    font-size: 3rem;
    position: relative;
    right: 0.7rem;
    bottom: 0.6rem;
  }
  &:hover {
    background: #001a33;
    color: white;
  }
  i {
    color: #f08b33;
  }
`;
