import React, { Component } from "react";
import FormInput from "./FormInput";
import MultiForm from "./MultiForm";

class Cv extends Component {
  state = { dirty: {}, clean: {} };

  handleSubmit = (e) => {
    e.preventDefault();
    /* organize data */
    const clean = [];
    let groups = {};
    for (let key in this.state.dirty) {
      const split = key.split("_");
      console.log(split);
    }
  };

  handleChange = (e) => {
    const newValue = e.target.value;
    const label = e.target.name;
    const updated = { ...this.state.dirty, [label]: newValue };

    this.setState({
      dirty: updated,
    });
  };

  render() {
    const contact = [["Name", "Jane Doe"], "Email", "Phone"];
    const experience = [
      "Employer",
      "Title",
      ["Date", "5/30/21 - Current"],
      ["Duties", "html, css, javascript"],
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
      </div>
    );
  }
}

export default Cv;
