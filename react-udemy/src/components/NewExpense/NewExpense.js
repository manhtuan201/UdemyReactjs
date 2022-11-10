import { Form } from "antd";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpense = {
      id:Math.random().toString(),
      ...enteredExpenseData,
    }
    props.AddExpense(newExpense)
  };
  return (
    <>
      <div className="expense">
        <ExpenseForm onSaveHandleData={saveExpenseDataHandler} />
      </div>
    </>
  );
};
export default NewExpense;
