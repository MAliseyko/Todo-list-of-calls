import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button {...props} className="button" type="submit">
      {props.children}
    </button>
  );
}

export default Button;
