import React from "react";
import "./ExpenseItemDate.css";
import { Button } from "antd";
const ExpenseItemDate = (props) => {
  const now = new Date();
  const month = now.toLocaleString('en-US', { month: 'long' });
  const date = now.toLocaleString('en-US', { day: '2-digit' });
  const year = now.getFullYear();
  const clickHandler = (e) => {
    
 };
console.log("Prop1",props);
  return (
    <div className="expense-date">
      <div>{props.date.month}</div>
      <div>{props.date.date}</div>
      <div>{props.date.year}</div>
    </div>
  );
};
export default ExpenseItemDate;
