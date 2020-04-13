import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { input, multi } = props;

  // const onClickHandler = (input) => {
  //   switch (input) {
  //     case "*":
  //       return multipler();
  //     case "/":
  //       return devition();
  //     case "+":
  //       return addition();
  //     case "-":
  //       return deduction();
  //     case "=":
  //       return showRes();
  //     default:
  //       // console.log("clicked");
  //       return newNum(input);
  //   }
  // };

  return (
    <div className={classes.Button} onClick={() => multi(input)}>
      {input}
    </div>
  );
};

export default Button;
