import React from "react";
import classes from "./Buttons.module.css";

import Button from "./Button/Button";

const Buttons = (props) => {
  const { buttonList, multi } = props;
  const ButtonsList = buttonList.map((btn, index) => (
    <Button key={index} input={btn} multi={multi} />
  ));
  return <div className={classes.Buttons}>{ButtonsList}</div>;
};

export default Buttons;
