import React, { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMP_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance 1",
    amount: "294.67",
    date: new Date(2021, 1, 12),
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: "894.67",
    date: new Date(2022, 2, 12),
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: "794.67",
    date: new Date(2022, 3, 12),
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: "74.67",
    date: new Date(2022, 4, 12),
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: "84.67",
    date: new Date(2022, 5, 12),
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: "94.67",
    date: new Date(2022, 6, 12),
  },
  {
    id: "e3",
    title: "Car Insurance 3",
    amount: "14.67",
    date: new Date(2020, 7, 12),
  },
  {
    id: "e4",
    title: "Car Insurance 4",
    amount: "74.67",
    date: new Date(2019, 8, 12),
  },
  {
    id: "e4",
    title: "Car Insurance 4",
    amount: "64.67",
    date: new Date(2019, 9, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMP_EXPENSE);
  const AddExpense = (expenseData) => {
    setExpenses((pre) => {
      return [expenseData, ...pre];
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
