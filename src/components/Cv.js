import React, { Component } from "react";
import FormInput from "./FormInput";
import MultiForm from "./MultiForm";

class Cv extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    /* organize data */
    let clean = {};
    for (let key in this.state) {
      const split = key.split("_");
      if (clean[split[0]]) {
        clean[split[0]].push(this.state[key]);
      } else {
        clean[split[0]] = [this.state[key]];
      }
    }

    console.log(clean);
  };

  handleChange = (e) => {
    const newValue = e.target.value;
    const label = e.target.name;
    const updated = { [label]: newValue };

    this.setState(updated);
    console.log(this.state);
  };

  render() {
    const contact = [["Name", "Jane Doe"], "Email", "Phone"];
    const experience = [
      "Employer",
      "Title",
      ["Date", "5/30/21 - Current"],
      ["Skills", "html, css, javascript"],
    ];
    const education = [
      "School",
      ["Degree", "Bachelor in Computer Science"],
      "Location",
    ];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2>Contact</h2>
            <div>
              <FormInput onChange={this.handleChange} labels={contact} />
            </div>
          </div>

          <div>
            <h2>Experience</h2>
            <div>
              <FormInput onChange={this.handleChange} labels={experience} />
            </div>
            <MultiForm onChange={this.handleChange} labels={experience} />
          </div>

          <div>
            <h2>Education</h2>
            <div>
              <FormInput onChange={this.handleChange} labels={education} />
            </div>
            <MultiForm onChange={this.handleChange} labels={education} />
          </div>

          <div>
            <button type="submit">Generate</button>
          </div>
        </form>
        <div></div>
      </div>
    );
  }
}

export default Cv;
