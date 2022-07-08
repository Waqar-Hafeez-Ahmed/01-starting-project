import React from "react";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onError}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
