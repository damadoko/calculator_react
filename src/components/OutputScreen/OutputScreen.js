import React from "react";
import classes from "./OutputScreen.module.css";

const OutputScreen = (props) => (
  <div className={classes.OutputScreen}>
    <span className={classes.Span}>{props.output}</span>
  </div>
);

export default OutputScreen;
