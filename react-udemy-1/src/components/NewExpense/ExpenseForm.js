import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnderedTitle] = useState("");
  const [enteredAmount, setEnderedAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnderedTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnderedAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const handlerInput = (e) => {
    const date = new Date(enteredDate);
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: date,
    }
    props.onSaveHandleData(expenseData);
    console.log("expenseData",expenseData);
   
  };
  return (
    <Form>
      <div className="expense-form">
        <div className="expense-form-item">
          <p>Title</p>
          <Input
            name="title"
            className="expense-input"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expense-form-item">
          <p>Amount</p>
          <Input
            name="amount"
            className="expense-input"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expense-form-item">
          <p>Date</p>
          <Input
            type="date"
            name="date"
            className="expense-input"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form-action">
        <Button
          onClick={handlerInput}
          type="submit"
          htmlType="submit"
          className="expense-btn"
        >
          Add Expense
        </Button>
      </div>
    </Form>
  );
};
export default ExpenseForm;
