import React, { Component } from "react";
import FormSection from "./FormSection";
import SmartButton from "./SmartButton";

class Cv extends Component {
  state = {
    edit: false,
    General: {
      name: "Jane Doe",
      number: "555-333-4444",
      email: "jane@doe.com",
    },
    Experience: {
      title: "Chief Grazing Officer",
      date: "2022 - Current",
      company: "Doe Co.",
      duties:
        "Ensured grass levels were at appropriate levels and produced fawn.",
    },
    Education: {
      field: "Masters in Agriculture",
      year: "2020",
      school: "Forest and Pasture",
    },
  };

  swapButtons = () => {
    const newState = !this.state.edit;
    this.setState({ edit: newState });
  };

  handleEdit = (e) => {
    e.preventDefault();

    this.swapButtons();
  };

  onSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("#myForm");
    const inputs = Array.from(form.querySelectorAll("input"));

    const newState = this.state;
    for (let key in newState) {
      if (key === this.state.edit) continue;
      inputs.map((item) => {
        if (newState[key][item.name]) {
          if (item.value !== "") {
            return (newState[key][item.name] = item.value);
          }
        }
      });
    }

    this.setState(newState);
    this.swapButtons();
  };

  handleSave = () => {};

  render() {
    const { edit, General, Experience, Education } = this.state;

    return (
      <form id="myForm" onSubmit={this.onSubmit}>
        <div>
          <FormSection info={General} edit={edit} title="General" />
          <FormSection info={Experience} edit={edit} title="Experience" />
          <FormSection info={Education} edit={edit} title="Education" />
        </div>
        <SmartButton
          bool={edit}
          text={["Edit", "Submit"]}
          events={[this.handleEdit, this.onSubmit]}
          type={["button", "submit"]}
        />
      </form>
    );
  }
}

export default Cv;
