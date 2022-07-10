import { Form } from "antd";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
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
