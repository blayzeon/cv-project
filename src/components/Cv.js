import React from "react";
import CustomText from "./CustomText";
import Ul from "./Ul";

export default function Reference() {
  return (
    <div id="cv-background">
      <div id="cv-container">
        <div className="flex-container">
          <div className="cv-general">
            <h1>
              <CustomText
                default={"Your Name"}
                class={"title-case"}
                label={"your full name"}
              />
            </h1>
            <p>
              <CustomText
                default={
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                }
                class={"cv-subtext"}
                label={"your tagline"}
              />
            </p>
          </div>
          <div>
            <Ul title="EXPERIENCE" />
            <Ul title="EDUCATION" />
            <Ul title="PROJECTS" />
          </div>
        </div>
        <div className="flex-container">
          <div className="cv-general">
            123 Your Street
            <br />
            Your City, ST 12345
            <br />
            <strong>
              123-456-7890
              <br />
              no_reply@example.com
            </strong>
          </div>
          <div>
            <div>
              <Ul title="SKILLS" />
            </div>
            <div>
              <h3 className="cv-accent uppercase">
                <CustomText default="LANGUAGES" label="extra header" />
              </h3>
              <ul>
                <li className="cv-info">
                  <CustomText
                    default="Lorem ipsum, Dolor sit amet, Consectetuer"
                    label="accomplishments"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
