import { Form } from "antd";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };
  return (
    <>
      <div className="expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </>
  );
};
export default NewExpense;
