import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type1={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
