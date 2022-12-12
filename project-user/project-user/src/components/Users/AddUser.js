import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();
  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const dataUser = {
      userName: userName,
      age: age,
    };
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    }
    if (+age < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age." });
    }
    setUserName("");
    setAge("");
    props.addUser(dataUser);
  };
  const errorHandler = () => {
    console.log("123")
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input} className1={classes.input1}>
        <form onSubmit={onSubmitHandle}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
            style={{ borderColor: !isValid ? "red" : "#ccc" }}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
            style={{ borderColor: !isValid ? "red" : "#ccc" }}
          />
          <Button type1="submit" onClick={onSubmitHandle}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
