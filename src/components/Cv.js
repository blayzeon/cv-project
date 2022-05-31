import React, { Component } from "react";
import FormInput from "./FormInput";
import MultiForm from "./MultiForm";

class Cv extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    /* to add */
  };

  handleChange = (e) => {
    const newValue = e.target.value;
    const label = e.target.name;
    const updated = { [label]: newValue };

    this.setState(updated);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>Contact</h2>
          <FormInput
            onChange={this.handleChange}
            labels={["Name", "Email", "Phone"]}
          />
        </div>

        <div>
          <h2>Experience</h2>
          <FormInput
            onChange={this.handleChange}
            labels={["Employer", "Title", "Date"]}
          />
          <MultiForm
            onChange={this.handleChange}
            labels={["Employer", "Title", "Date"]}
          />
        </div>

        <div>
          <h2>Education</h2>
          <FormInput
            onChange={this.handleChange}
            labels={["School", "Field", "Date"]}
          />
          <MultiForm
            onChange={this.handleChange}
            labels={["School", "Field", "Date"]}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Cv;
