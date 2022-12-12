import { useDispatch, useSelector } from "react-redux";
import { couterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(couterActions.toggle());
  };
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter
  })
  const showCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(couterActions.increment());
  };
  const incrementBy5Handler = () => {
    dispatch(couterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch(couterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
