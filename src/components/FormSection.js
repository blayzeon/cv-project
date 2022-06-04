import React, { Component } from "react";

class Editable extends Component {
  render() {
    const result = [];
    for (let key in this.props.info) {
      result.push(
        <label key={key}>
          {key}:
          <input type="text" name={key} placeholder={this.props.info[key]} />
        </label>
      );
    }
    return <div className="editable">{result}</div>;
  }
}

class Display extends Component {
  render() {
    const result = [];
    for (let key in this.props.info) {
      result.push(
        <div key={key}>
          <span className={key}>{key}: </span>
          <p key={key}>{this.props.info[key]}</p>
        </div>
      );
    }
    return (
      <div className="section">
        <h2>{this.props.title}</h2>
        <div id={this.props.title}>{result}</div>
      </div>
    );
  }
}

export default class FormSection extends Component {
  render() {
    return this.props.edit ? (
      <Editable info={this.props.info} />
    ) : (
      <Display info={this.props.info} title={this.props.title} />
    );
  }
}
