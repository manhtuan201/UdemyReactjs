import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
import ExpenseChart from "./ExpensesChart";
const Expense = (props) => {
  console.log("2");
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpense = props.items.filter((itemfilter) => {
    return itemfilter.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpense}/>
        {filterExpense.length === 0 && (
          <p style={{ color: "red" }}>Emty data</p>
        )}
        {filterExpense.length > 0 &&
          filterExpense.map((item, index) => (
            <ExpenseItem
              key={index}
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
