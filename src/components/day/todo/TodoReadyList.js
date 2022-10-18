import { Fragment } from "react";

import classes from "./TodoReadyList.module.css";
import TodoReady from "./TodoReady";

const TodoList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <TodoReady
            id={todo.id}
            dayTodoName={todo.dayTodoName}
            hardness={todo.hardness}
            scariness={todo.scariness}
            isReady={todo.isReady}
            onUpdateTodo={props.onUpdateTodo}
            onDeleteTodo={props.onDeleteTodo}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
