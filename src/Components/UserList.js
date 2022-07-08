import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";
function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} ( {user.age} Year Old )
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
