import React, { useState } from "react";

export default function CustomText(props) {
  const [value, setValue] = useState(props.default);
  const requestValue = (e) => {
    const a = prompt(`Add a new value for ${props.label}: `);
    console.log(e);
    if (!a) return;
    setValue(a);
  };

  const classes = props.class ? props.class + " cv-hover" : "cv-hover";
  return (
    <span className={classes} onClick={requestValue}>
      {value}
    </span>
  );
}
