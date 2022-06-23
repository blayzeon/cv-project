import React from "react";
import CustomText from "./CustomText";
import Ul from "./Ul";

export default function Reference() {
  const handlePrint = (e) => {
    const button = e.target;
    button.classList.add("display-none");
    setTimeout(() => {
      window.print();
      button.classList.remove("display-none");
    }, 500);
  };

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
          <div className="cv-general padded">
            <strong>
              <CustomText
                default={"(123) 456-7890"}
                label={"your telephone number"}
              />
              <br />
              <CustomText
                default={"no_reply@example.com"}
                label={"your email address"}
              />
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
      <button type="button" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
}
