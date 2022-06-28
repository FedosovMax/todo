import { Fragment } from "react";

import classes from "./Todo.module.css";
import Todo from "./Todo";

const TodoList = (props) => {

  // const onUpdateTodoHandler.

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
            onUpdateTodo={props.onUpdateTodo}
            onDeleteTodo={props.onDeleteTodo}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
