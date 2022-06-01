import React, { Component } from "react";

class Work extends Component {
  render() {
    const duties = this.props.duties.split(",");
    return (
      <>
        <h2>Work History</h2>
        <div>
          <p>
            <strong>{this.props.title}</strong>
          </p>
          <p>{this.props.date}</p>
        </div>
        <div>
          <p>{this.props.employer}</p>
          <ul>
            {duties.map((duty) => (
              <li>{duty}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default class Output extends Component {
  render() {
    const contact = [];
    if (!this.props) return;
    console.log(this.props.props);
    const props = this.props.props;
    return (
      <div>
        <div>
          <h1>{props.Name}</h1>
          <div>
            {props.Email}
            {props.Phone}
          </div>
        </div>
        <div>
          <Work
            duties={props.Duties}
            date={props.Date}
            title={props.Title}
            employer={props.Employer}
          />
        </div>
      </div>
    );
  }
}
