import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
const Expense = (props) => {
  console.log("3")
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChange={filterChangeHandler}
        />

        {props.items.map((item, index) => (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>
    </>
  );
};
export default Expense;
