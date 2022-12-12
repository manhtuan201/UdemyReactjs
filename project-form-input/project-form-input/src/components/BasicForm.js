import { useEffect, useState } from "react";
import React from "react";
import useInputBasic from "../hooks/use-input-basic";
const BasicForm = (props) => {
  const {
    value: enterValue,
    isTouched: isTouched,
    hasError: hasError,
    valueHandler: valueHandler,
    onBlurHandler: onBlurHandler,
    enterValueIsValid: enterValueIsValid,
    reset: resetFirstName,
  } = useInputBasic((value) => {
    return value.trim() !== "";
  });
  const {
    value: enterLastName,
    isTouched: isTouchedLastName,
    hasError: hasErrorLastName,
    valueHandler: valueHandlerLastName,
    onBlurHandler: onBlurHandlerLastName,
    enterValueIsValid: enterValueIsValidLastName,
    reset: resetLastName,
  } = useInputBasic((value) => {
    return value.trim() !== "";
  });
  const {
    value: enterEmail,
    isTouched: isTouchedEmail,
    hasError: hasErrorEmail,
    valueHandler: valueHandlerEmail,
    onBlurHandler: onBlurHandlerEmail,
    enterValueIsValid: enterValueIsValidEmail,
    reset: resetEmail,
  } = useInputBasic((value) => {
    return value.trim() !== "";
  });
  const [emailValidate, setEmailValidate] = useState(false);
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const checkEmail = new RegExp(pattern.test(enterEmail));
  useEffect(() => {
    if (checkEmail === `/false/`) {
      setEmailValidate(false);
    } else {
      setEmailValidate(true);
    }
  }, [emailValidate]);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (
      enterValueIsValid &&
      enterValueIsValidLastName &&
      enterValueIsValidEmail
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enterValueIsValid, enterValueIsValidLastName, enterValueIsValidEmail]);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!enterValueIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  const nameInputClasses = hasError ? "form-control invalid" : "form-control ";
  const emailInputClasses = hasErrorEmail
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = hasErrorLastName
    ? "form-control invalid"
    : "form-control ";
  const vali = emailValidate && isTouchedEmail;
  console.log("vali", vali);
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={enterValue}
            onChange={valueHandler}
            onBlur={onBlurHandler}
            type="text"
            id="firstName"
          />
          {hasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enterLastName}
            onChange={valueHandlerLastName}
            onBlur={onBlurHandlerLastName}
            type="text"
            id="lastName"
          />
          {hasErrorLastName && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enterEmail}
          onChange={valueHandlerEmail}
          onBlur={onBlurHandlerEmail}
          type="text"
          id="email"
        />
        {hasErrorEmail && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
