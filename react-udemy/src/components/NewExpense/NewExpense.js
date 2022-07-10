import { Form } from "antd";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ()=>{
    return(
        <>
            <div className="expense">
                <ExpenseForm/>
            </div>
        </>
    )

};
export default NewExpense;