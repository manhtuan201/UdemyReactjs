import { Button, Input } from "antd";
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });
  const handlerInput = (e) => {
    setUserInput({
      ...userInput,
      expenseDate: e.target.value,
    });
  };
  console.log(userInput);
  return (
    <>
      <div className="expense-form">
        <div className="expense-form-item">
          <p>Title</p>
          <Input className="expense-input" onChange={handlerInput} />
        </div>
        <div className="expense-form-item">
          <p>Amount</p>
          <Input className="expense-input" onChange={handlerInput} />
        </div>
        <div className="expense-form-item">
          <p>Date</p>
          <Input className="expense-input" onChange={handlerInput} />
        </div>
      </div>
      <div className="expense-form-action">
        <Button className="expense-btn">Add Expense</Button>
      </div>
    </>
  );
};
export default ExpenseForm;
