import React, { Component } from "react";

export default class SmartButton extends Component {
  render() {
    return this.props.bool ? (
      <button type={this.props.type[1]} onClick={this.props.events[1]}>
        {this.props.text[1]}
      </button>
    ) : (
      <button type={this.props.type[0]} onClick={this.props.events[0]}>
        {this.props.text[0]}
      </button>
    );
  }
}
