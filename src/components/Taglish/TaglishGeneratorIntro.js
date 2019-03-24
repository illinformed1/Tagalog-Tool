import React, { Component } from "react";
import styled from "styled-components";

export default class TaglishGeneratorIntro extends Component {
  render() {
    return (
      <Intro>
        <div className="wrapper 100vh justify-content-center">
          <div className="inner w-100">
            <h2> The Taglish Generator</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores totam laborum beatae, esse a accusamus fuga
              exercitationem non deserunt architecto?
            </p>
          </div>
        </div>
      </Intro>
    );
  }
}

const Intro = styled.div`
  position: fixed;

  width: 100vh;
  margin-right: 12rem;
  height: 100vh;
  background: lightgray;

  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: 95%;
    background: white;
    display: grid;
    grid-template-areas:
      "header header"
      "body body"
      "anim anim"
      "footer footer";
    justify-content: center;

    h2 {
      grid-area: header;
      margin: 2px 2px;
      text-decoration: underline black;
      text-align: center;
    }
    p {
      grid-area: body;
    }
  }
`;
