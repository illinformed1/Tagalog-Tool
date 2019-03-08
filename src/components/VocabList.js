import React, { Component } from "react";

export default class VocabList extends Component {
  state = {
    count: 1,
    isHovering: false
  };
  increment = () => this.setState(prev => ({ count: prev.count + 1 }));

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = state => {
    return {
      isHovering: !state.isHovering
    };
  };

  render() {
    console.log(this.state.count);
    const { children } = this.props;
    return children({
      count: this.state.count,
      increment: this.increment,
      handleDelete: this.handleDelete,
      handleMouseHover: this.handleMouseHover,
      toggleHoverState: this.toggleHoverState,
      isHovering: this.state.isHovering
    });
  }
}
