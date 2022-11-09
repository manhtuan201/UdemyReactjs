import React, { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMP_EXPENSE = [
    {
      expenseDate: {
        date: "09",
        month: "Aprir",
        year: "2022",
      },
      expenseTitle: "Car Insurance 1",
      expenseAmount: "$294.67",
    },
    {
      expenseDate: {
        date: "08",
        month: "January",
        year: "2022",
      },
      expenseTitle: "Car Insurance 2",
      expenseAmount: "$8794.67",
    },
    {
      expenseDate: {
        date: "07",
        month: "July",
        year: "2022",
      },
      expenseTitle: "Car Insurance 3",
      expenseAmount: "$194.67",
    },
    {
      expenseDate: {
        date: "06",
        month: "June",
        year: "2022",
      },
      expenseTitle: "Car Insurance 4",
      expenseAmount: "$894.67",
    },
  ];
  const [expenses, setExpenses] = useState(DUMP_EXPENSE);
  const AddExpense = (expenseData) => {
    setExpenses((prev) => {
      return [expenseData, ...prev];
    });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hello</h1>
      <NewExpense addExpense={AddExpense} />
      <Expense items={DUMP_EXPENSE} />
    </>
  );
};
export default App;
