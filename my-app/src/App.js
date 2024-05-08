import React, { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [resultColor, setResultColor] = useState("");

  const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const handleNumClick = (NUM) => {
    if (operator === "") {
      setOperand1(operand1 + NUM);
    } else {
      setOperand2(operand2 + NUM);
    }
    setResultColor("");
  };
  const handleOperatorClick = (op) => {
    if (op === "C") {
      setOperand1("");
      setOperand2("");
      setOperator("");
      setResultColor("");
    } else if (op === "+" || op === "-") {
      setOperator(op);
      setResultColor("");
    } else if (op === "=") {
      let result;
      if (operator === "+") {
        result = parseInt(operand1) + parseInt(operand2);
      } else if (operator === "-") {
        result = parseInt(operand1) - parseInt(operand2);
      }
      setOperand1(result.toString());
      setOperand2("");
      setOperator("");
      setResultColor("green");
    }
  };

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <div className={styles.display}>
        {operand1} {operator} {operand2}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((NUM) => (
          <button key={NUM} onClick={() => handleNumClick(NUM)}>
            {NUM}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleOperatorClick("=")}>=</button>
        <button onClick={() => handleOperatorClick("C")}>C</button>
      </div>
    </div>
  );
}
