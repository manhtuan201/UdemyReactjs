import React from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenseData = [
    {
      expenseDate: "January 28th 2021 ",
      expenseTitle: "Car Insurance",
      expenseAmount: "$294.67",
    },
    {
      expenseDate: "February 28th 2021 ",
      expenseTitle: "Car Insurance",
      expenseAmount: "$8794.67",
    },
    {
      expenseDate: "March 28th 2021 ",
      expenseTitle: "Car Insurance",
      expenseAmount: "$194.67",
    },
    {
      expenseDate: "April 28th 2021 ",
      expenseTitle: "Car Insurance",
      expenseAmount: "$894.67",
    },
  ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hello</h1>
      <NewExpense />
      <Expense items={expenseData} />
    </>
  );
};
export default App;
