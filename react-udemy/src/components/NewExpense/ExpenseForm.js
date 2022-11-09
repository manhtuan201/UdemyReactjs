import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnderedTitle] = useState("");
  const [enteredAmount, setEnderedAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    console.log("title");
    setEnderedTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log("amount");
    setEnderedAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log("date");
    setEnteredDate(event.target.value);
  };
  const handlerInput = (e) => {
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.onSaveExpenseData(expenseData);
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
