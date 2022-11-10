import { Form } from "antd";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log("2")
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.addExpense(expenseData);
  };
  return (
    <>
      <div className="expense">
        <ExpenseForm onSavehandleData={saveExpenseDataHandler} />
      </div>
    </>
  );
};
export default NewExpense;
