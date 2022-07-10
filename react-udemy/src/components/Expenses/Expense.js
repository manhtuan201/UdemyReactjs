import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
const Expense = (props) => {
  return (
    <>
      <div className="expenses">
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
