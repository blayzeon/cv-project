import React, { Component } from "react";
import FormInput from "./FormInput";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
  render() {
    return (
      <>
        {this.props.forms.map((key) => {
          return (
            <div key={key}>
              <FormInput
                onChange={this.props.onChange}
                labels={this.props.labels}
              />
              <button id={key} type="button" onClick={this.props.handleDelete}>
                Delete
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default class MultiForm extends Component {
  state = { forms: [] };
  handleClick = () => {
    const forms = this.state.forms;
    this.setState({ forms: [...forms, uuidv4()] });
  };

  handleDelete = (e) => {
    const id = e.target.id;
    const newForms = [];
    this.state.forms.forEach((key) => {
      if (this.state.forms.length === 1) {
        this.setState({ forms: [] });
        return;
      }
      if (key === id) return;
      newForms.push(key);
      this.setState({ forms: newForms });
    });
  };

  render() {
    return (
      <>
        <Form
          onChange={this.props.onChange}
          labels={this.props.labels}
          forms={this.state.forms}
          handleDelete={this.handleDelete}
        />
        <button type="button" onClick={this.handleClick}>
          Add
        </button>
      </>
    );
  }
}
