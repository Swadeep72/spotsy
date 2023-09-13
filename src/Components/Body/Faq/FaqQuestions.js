import React from "react";
import logo from "./white plus.svg";
const FaqQuestions = (props) => (
  <div className="image-h1">
    <img src={logo} />
    <a>{props.title}</a>
  </div>
);

export default FaqQuestions;
