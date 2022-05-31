import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Input extends Component {
  render() {
    const newName = this.props.label + "_" + this.props.uuid;
    return (
      <div>
        <label>{this.props.label}: </label>
        <input type="text" name={newName} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default class FormInput extends Component {
  state = { key: uuidv4() };
  render() {
    return (
      <>
        {this.props.labels.map((label) => {
          return (
            <Input
              key={label}
              label={label}
              onChange={this.props.onChange}
              uuid={this.state.key}
            />
          );
        })}
      </>
    );
  }
}
