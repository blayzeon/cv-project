import React from "react";
import CustomText from "./CustomText";

export default function CustomGroup(props) {
  const template = {};

  if (props.title === "EXPERIENCE") {
    template.name = "company";
    template.location = "location";
    template.title = "job title";
  } else if (props.title === "EDUCATION") {
    template.name = "school name";
    template.location = "Location";
    template.title = "Degree";
  } else if (props.title === "PROJECTS") {
    template.name = "Project Name";
    template.title = "Detail";
  }
  return (
    <>
      <h4>
        <strong>
          <CustomText
            default={template.name}
            class={"title-case"}
            label={template.name}
          />
        </strong>{" "}
        <CustomText
          default={template.location}
          class={"title-case"}
          label={template.location}
        />{" "}
        -{" "}
        <em>
          <CustomText
            default={template.title}
            class={"title-case"}
            label={template.title}
          />
        </em>
      </h4>
      <p className="cv-info">
        <CustomText
          default={"MONTH 20XX"}
          class={"uppercase"}
          label={"your start date"}
        />{" "}
        -{" "}
        <CustomText
          default={"PRESENT"}
          class={"uppercase"}
          label={"your end date"}
        />
      </p>
      <p className="cv-info">
        <CustomText
          default={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."
          }
          label={`description of your ${props.title.toLowerCase()}`}
        />
      </p>
    </>
  );
}
