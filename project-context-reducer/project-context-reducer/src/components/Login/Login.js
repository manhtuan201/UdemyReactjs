import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
// 1. create initialState
const initialStateEmail = {
  value: "",
  isValid: null,
};
const initialStatePass = {
  value: "",
  isValid: null,
};
// 2. create actions

const USER_INPUT = "USER_INPUT";
const ON_BLUR = "ON_BLUR";
const PW_INPUT = "PW_INPUT";
const ON_BLUR_PW = "ON_BLUR_PW";

// 3. create reducer
const emailReducer = (state, action) => {
  switch (action.type) {
    case USER_INPUT:
      return { value: action.val, isValid: action.val.includes("@") };
    case ON_BLUR:
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: state.value, isValid: false };
  }
};
const passReducer = (state, action) => {
  switch (action.type) {
    case PW_INPUT:
      return { value: action.val, isValid: action.val.trim().length > 6 };
    case ON_BLUR_PW:
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return { value: state.value, isValid: false };
  }
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    initialStateEmail
  );
  const [passState, dispatchPass] = useReducer(passReducer, initialStatePass);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passState;;
  useEffect(() => {
    const identifer = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifer);
    };
  }, [emailIsValid, passwordIsValid]);
  const emailChangeHandler = (event) => {
    // 4. create dispatch
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(event.target.value.includes("@") && passState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: "PW_INPUT", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: "ON_BLUR_PW" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
