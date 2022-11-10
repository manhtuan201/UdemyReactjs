import React, { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMP_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance 1",
    amount: "$294.67",
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: "$8794.67",
    date: new Date(2022, 5, 12),
  },
  {
    id: "e3",
    title: "Car Insurance 3",
    amount: "$194.67",
    date: new Date(2023, 5, 12),
  },
  {
    id: "e4",
    title: "Car Insurance 4",
    amount: "$894.67",
    date: new Date(2024, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMP_EXPENSE);
  const AddExpense = (expenseData) => {
    console.log("1")
    setExpenses((prev) => {
      return [expenseData, ...prev];
    });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hello</h1>
      <NewExpense addExpense={AddExpense} />
      <Expense items={expenses} />
    </>
  );
};
export default App;
