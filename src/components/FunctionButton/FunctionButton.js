import React from "react";
import classes from "./FunctionButton.module.css";

const FunctionButton = (props) => {
  const { clearAll, deleteChar } = props;
  const style = {
    textAlign: "center",
    border: "1px solid black",
  };

  return (
    <div className={classes.FunctionButton}>
      <div style={style} onClick={clearAll}>
        Clear
      </div>
      <div style={style} onClick={deleteChar}>
        Delete
      </div>
    </div>
  );
};

export default FunctionButton;
