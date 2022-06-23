import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomText from "./CustomText";
import CustomGroup from "./CustomGroup";

export default function Ul(props) {
  const [children, setChildren] = useState([uuidv4()]);

  const addChild = () => {
    const newChildren = [...children];
    newChildren.push(uuidv4());
    setChildren(newChildren);
  };
  return (
    <>
      <h3 className="cv-accent cv-hover" onClick={addChild}>
        {props.title}
      </h3>
      <ul>
        {children.map((key) => {
          return props.title === "SKILLS" ? (
            <li key={key} id={key}>
              <CustomText
                default={"Enter a new skill"}
                class={"cv-info"}
                label={"your skill"}
              />
            </li>
          ) : (
            <li key={key} id={key}>
              <CustomGroup
                default={"Enter a new skill"}
                class={"cv-info"}
                label={"your skill"}
                title={props.title}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
