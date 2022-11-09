import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
const Expense = (props) => {
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
            date={item.expenseDate}
            title={item.expenseTitle}
            amount={item.expenseAmount}
          />
        ))}
      </div>
    </>
  );
};
export default Expense;
