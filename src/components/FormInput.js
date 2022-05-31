import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Input extends Component {
  render() {
    const newName = this.props.label + "_" + this.props.uuid;
    return (
      <div>
        <label htmlFor={this.props.label}>{this.props.label}: </label>
        <input
          id={this.props.label}
          type="text"
          name={newName}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default class FormInput extends Component {
  state = { key: uuidv4() };
  render() {
    return (
      <>
        {this.props.labels.map((input) => {
          let label = input;
          let placeholder = null;
          if (Array.isArray(input)) {
            label = input[0];
            placeholder = input[1];
          }
          return (
            <Input
              key={label}
              label={label}
              placeholder={placeholder}
              onChange={this.props.onChange}
              uuid={this.state.key}
            />
          );
        })}
      </>
    );
  }
}
