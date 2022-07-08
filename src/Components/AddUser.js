import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

function AddUser(props) {
  const [error, setError] = useState();
  const inputName = useRef();
  const inputAge = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userNameData = inputName.current.value;
    const userAgeData = inputAge.current.value;
    if (userNameData.length === 1 || userAgeData === 1) {
      setError({
        title: "This is invalid input",
        message: "You have entered invalid name or age",
      });
      return;
    }
    if (+userAgeData < 1) {
      setError({
        title: "This is invalid input",
        message: "You have entered invalid name or age",
      });
      return;
    }
    props.onAdd(userNameData, userAgeData);
    inputName.current.value = "";
    inputAge.current.value = "";
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={inputName} />
          <label htmlFor="age">Age (Year)</label>
          <input id="age" type="number" ref={inputAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
