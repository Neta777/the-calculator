import React, { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [resultColor, setResultColor] = useState(false);

  const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const handleNumClick = (num) => {
    if (operator === "") {
      setOperand1(operand1 + num);
    } else {
      setOperand2(operand2 + num);
    }
    setResultColor(false);
  };

  const handleOperatorClick = (op) => {
    if (op === "C") {
      clearAll();
    } else if (op === "+" || op === "-") {
      setOperator(op);
      setResultColor(false);
    } else if (op === "=") {
      calculateResult();
    }
  };

  const clearAll = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setResultColor(false);
  };

  const calculateResult = () => {
    let result;
    if (operator === "+") {
      result = parseInt(operand1) + parseInt(operand2);
      setOperator("");
    } else if (operator === "-") {
      result = parseInt(operand1) - parseInt(operand2);
      setOperator("");
    }
    setOperand1(result.toString());
    setResultColor(true);
    setOperand2("");
    setOperator("");
  };

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <div className={`${styles.display} ${resultColor ? styles.result : ""}`}>
        {operand1} {operator} {operand2}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((num) => (
          <button key={num} onClick={() => handleNumClick(num)}>
            {num}
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
