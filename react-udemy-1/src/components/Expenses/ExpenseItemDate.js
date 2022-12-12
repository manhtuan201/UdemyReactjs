import React from "react";
import "./ExpenseItemDate.css";
import { Button } from "antd";
const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const date = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  const clickHandler = (e) => {
    
 };
  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{date}</div>
      <div>{year}</div>
    </div>
  );
};
export default ExpenseItemDate;
