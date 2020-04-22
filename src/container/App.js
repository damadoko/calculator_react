import React, { Component } from "react";
import classes from "./App.module.css";

import Title from "../components/Title/Title";
import OutputScreen from "../components/OutputScreen/OutputScreen";
import Buttons from "../components/Buttons/Buttons";
import FunctionButton from "../components/FunctionButton/FunctionButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnList: [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "+", 0, ".", "=", "-"],
      screenOutput: 0,
      multipler: null,
      previousNum: null,
      currentNum: null,
      isMutiplying: false,
      lastInput: null,
    };
  }

  getNewNum = (num) => {
    const preState = { ...this.state };

    if (
      preState.currentNum &&
      (!isNaN(preState.lastInput) || preState.lastInput === ".")
    ) {
      const checkDot =
        preState.currentNum
          .toString()
          .split("")
          .filter((item) => item === ".").length !== 1;

      if ((num === "." && checkDot) || num !== ".") {
        const numString = `${preState.currentNum}${num}`;
        preState.currentNum = numString;
        preState.screenOutput = preState.currentNum;
        preState.lastInput = num;
      }
    } else if (
      num === "." &&
      (!preState.currentNum || isNaN(preState.lastInput))
    ) {
      const numString = `0${num}`;
      preState.previousNum = preState.currentNum;
      preState.currentNum = numString;
      preState.screenOutput = preState.currentNum;
      preState.lastInput = num;
    } else {
      preState.previousNum = preState.currentNum;
      preState.currentNum = `${num}`;
      preState.screenOutput = preState.currentNum;
      preState.lastInput = num;
    }

    this.setState(preState);
  };

  multiplyingHandler = (input) => {
    if (
      this.state.isMutiplying &&
      isNaN(input) &&
      input !== "." &&
      !isNaN(this.state.lastInput)
    ) {
      this.showResult();
    }

    switch (input) { 
      case "+":
        this.setState({ multipler: "+", isMutiplying: true, lastInput: "+" });
        break;
      case "-":
        this.setState({ multipler: "-", isMutiplying: true, lastInput: "-" });
        break;
      case "*":
        this.setState({ multipler: "*", isMutiplying: true, lastInput: "*" });
        break;
      case "/":
        this.setState({ multipler: "/", isMutiplying: true, lastInput: "/" });
        break;
      case "=":
        this.showResult();
        this.setState({ lastInput: "=" });
        break;
      default:
        // console.log("clicked");
        this.getNewNum(input);
    }
  };

  // additionHandler = () => {
  //   if (this.state.isMutiplying) {
  //     this.showResult();
  //   } else {
  //     this.setState({ multipler: "+", isMutiplying: true });
  //   }
  // };
  // deductionHandler = () => {
  //   if (this.state.isMutiplying) {
  //     this.showResult();
  //   } else {
  //     this.setState({ multipler: "-", isMutiplying: true });
  //   }
  // };
  // multiHandler = () => {
  //   this.setState({ multipler: "*", isMutiplying: true });
  // };
  // devideHandler = () => {
  //   if (this.state.currentNum !== 0) {
  //     this.setState({ multipler: "/", isMutiplying: true });
  //   }
  // };

  clearAllHandler = () => {
    // console.log("Clicked");
    this.setState({
      screenOutput: 0,
      multipler: null,
      previousNum: null,
      currentNum: null,
      lastInput: null,
      isMutiplying: false,
    });
  };

  deleteCharHandler = () => {
    const preState = { ...this.state };
    if (preState.currentNum) {
      if (preState.currentNum.length > 1) {
        preState.currentNum = preState.currentNum
          .split("")
          .slice(0, -1)
          .join("");
        preState.screenOutput = preState.currentNum;
      } else if (preState.currentNum.length === 1) {
        preState.currentNum = null;
        preState.screenOutput = 0;
      }
    }
    this.setState(preState);
  };

  showResult = () => {
    const { previousNum, currentNum } = this.state;
    let result;
    switch (this.state.multipler) {
      case "*":
        result = Number(previousNum) * Number(currentNum);
        this.setState({
          screenOutput: result,
          currentNum: result,
          multipler: null,
          isMutiplying: false,
        });
        break;
      case "/":
        result = Number(previousNum) / Number(currentNum);
        this.setState({
          screenOutput: result,
          currentNum: result,
          multipler: null,
          isMutiplying: false,
        });
        break;
      case "+":
        result = Number(previousNum) + Number(currentNum);
        this.setState({
          screenOutput: result,
          currentNum: result,
          multipler: null,
          isMutiplying: false,
        });
        break;
      case "-":
        result = Number(previousNum) - Number(currentNum);
        this.setState({
          screenOutput: result,
          currentNum: result,
          multipler: null,
          isMutiplying: false,
        });
        break;
      default:
        console.log("No multiply");
    }
  };

  render() {
    return (
      <div className={classes.App}>
        <Title />
        <OutputScreen output={this.state.screenOutput} />
        <FunctionButton
          clearAll={this.clearAllHandler}
          deleteChar={this.deleteCharHandler}
        />
        <Buttons
          buttonList={this.state.btnList}
          multi={this.multiplyingHandler}
        />
      </div>
    );
  }
}

export default App;
