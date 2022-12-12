import React, { useState } from "react";
const useInput = (valueValidate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = valueValidate(enteredValue);
  const hasError = !valueIsValid && isTouched
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };
  return {
    value: enteredValue,
    hasError,
    isTouched,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};
export default useInput;
