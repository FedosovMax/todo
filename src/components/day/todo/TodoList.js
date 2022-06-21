import { Fragment, useState } from "react";

import classes from "./Todo.module.css";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <Todo
            id={todo.id}
            text={todo.text}
            heavity={todo.heavity}
            scarity={todo.scarity}
            ready={todo.isReady}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
