import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
const Expense = (props) => {
  console.log("2");
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpense = props.items.filter((itemfilter) => {
    return itemfilter.date.getFullYear().toString() === filteredYear;
  });
  console.log("🚀 ~ file: Expense.js ~ line 14 ~ filterExpense ~ filterExpense", filterExpense)
  // let expenseContent = <p>No expense found.</p>;
  // if (filterExpense.length > 0) {
  //   expenseContent = filterExpense.map((item, index) => {
  //     <ExpenseItem
  //       key={item.id}
  //       date={item.date}
  //       title={item.title}
  //       amount={item.amount}
  //     />;
  //   });
  // }
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filterExpense.length === 0 && (
          <p style={{ color: "red" }}>Emty data</p>
        )}
        {filterExpense.length > 0 &&
          filterExpense.map((item, index) => (
            <ExpenseItem
              key={item.id}
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
