import { useReducer, useState } from "react";
import React from "react";
const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  console.log("🚀 ~ file: use-input-basic.js:8 ~ inputStateReducer ~ state", state)
  console.log("🚀 ~ file: use-input-basic.js:8 ~ inputStateReducer ~ action", action)
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};
const useInputBasic = (valueValidate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  // const [enterValue, setEnterValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);
  const enterValueIsValid = valueValidate(inputState.value);
  console.log(
    "🚀 ~ file: use-input-basic.js:27 ~ useInputBasic ~ inputState.value",
    inputState.value
  );
  const hasError = !enterValueIsValid && inputState.isTouched;
  const valueHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
    // setEnterValue(e.target.value);
  };
  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true);
  };
  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnterValue("");
    // setIsTouched(false);
  };
  return {
    value: inputState.value,
    isTouched: inputState.isTouched,
    hasError,
    valueHandler,
    onBlurHandler,
    enterValueIsValid,
    reset,
  };
};
export default useInputBasic;
