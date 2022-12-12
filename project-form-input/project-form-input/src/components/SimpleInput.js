import { useEffect, useState } from "react";
import React from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredValue,
    hasError: hasError,
    isTouched: nameIsTouched,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: inputBlurHandler,
    enteredNameIsValid: enteredNameIsValid,
    reset: resetName,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: enterEmail,
    hasError: hasErrorEmail,
    isTouched: emailIsTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    valueIsValid: enterEmailIsValid,
    reset: resetEmail,
  } = useInput((value) => {
    return value.includes("@");
  });
  const [enterNameTouched, setEnterNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (hasError) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [hasError]);

  const submitHandler = (event) => {
    event.preventDefault();
    const projectSubmit = {
      name:enteredValue,
      email:enterEmail,
    }
    setEnterNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    resetName();
    resetEmail()
  };
  const nameInputClasses = hasError ? "form-control invalid" : "form-control ";
  const emailInputClasses = hasErrorEmail ? "form-control invalid" : "form-control ";
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredValue}
          onChange={nameChangeHandler}
          onBlur={inputBlurHandler}
          type="text"
          id="name"
        />
        {hasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div
      className={emailInputClasses}
      >
        <label htmlFor="email">Your Email</label>
        <input
          value={enterEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="email"
        />
        {hasErrorEmail && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
