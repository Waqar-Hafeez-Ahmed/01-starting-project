import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

function App() {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const addUserHandler = (inputName, inputAge) => {
    return setUserData((prevData) => {
      return [
        ...prevData,
        { name: inputName, age: inputAge, key: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAdd={addUserHandler} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
