import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userData,setUserData]= useState([])
  const AddUserdata = (e)=>{
    setUserData((pre)=>{
      return[...pre,e]
    })
  }

  return (
    <div>
      <AddUser addUser={AddUserdata}  />
      <UserList userList={userData}/>
    </div>
  );
}

export default App;
