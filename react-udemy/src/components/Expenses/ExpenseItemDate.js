import React from "react";
import './ExpenseItemDate.css';
const ExpenseItemDate = (props) => {
  const now = new Date();
  const month = now.toLocaleString('en-US',{month:'long'});
  const date = now.toLocaleString('en-US',{day:'2-digit'});
  const year = now.getFullYear();
  const dataTime = [
    {
      month: 'January',
      date: '28th',
      year: '2022',
    },
    {
      month: 'February',
      date: '28th',
      year: '2022',
    },
    {
      month: 'April',
      date: '28th',
      year: '2022',
    },
    {
      month: 'May',
      date: '28th',
      year: '2022',
    },
  ]

  return (
    
    <div className="expense-date">
      <div>{month}</div>
      <div>{date}</div>
      <div>{year}</div>
  </div>
  );
}
export default ExpenseItemDate;
