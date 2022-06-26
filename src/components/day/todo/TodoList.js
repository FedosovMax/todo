import { Fragment } from "react";

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
            hardness={todo.hardness}
            scarity={todo.scarity}
            isReady={todo.isReady}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
