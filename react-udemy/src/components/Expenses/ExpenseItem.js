import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseItemDate from "./ExpenseItemDate.js";
import { Button } from "antd";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updates !");
  };
  const test = (dataTime) => {
    const expenseData = {
      ...dataTime,
    };
  };

  return (
    <div className="expense-item">
      <div className="expense-left">
        <p>
          <ExpenseItemDate addBip={test} date={props.date} />
        </p>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__description">
        <div className="expense-item_price">{props.amount}</div>
        <Button onClick={() => clickHandler()}>Change Title</Button>
      </div>
    </div>
  );
};
export default ExpenseItem;
