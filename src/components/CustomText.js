import React, { useState } from "react";

export default function CustomText(props) {
  const [value, setValue] = useState(props.default ? props.default : null);
  const requestValue = (e) => {
    const a = prompt(`Add a new value for ${props.label}: `);

    if (!a) {
      const target = e.target;
      const parent = target.closest("li");

      if (parent) {
        const a2 = window.confirm("Are you sure you wish to remove this item?");
        if (a2) {
          parent.remove();
        }
      }
      return;
    }
    setValue(a);
  };

  const classes = props.class ? props.class + " cv-hover" : "cv-hover";
  if (!value) return null;
  return (
    <span className={classes} onClick={requestValue}>
      {value}
    </span>
  );
}
