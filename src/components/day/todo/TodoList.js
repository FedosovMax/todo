import { Fragment } from "react";

import classes from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = (props) => {

  console.log('TodoList')

  return (
    <Fragment>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <Todo
            id={todo.id}
            dayTodoName={todo.dayTodoName}
            hardness={todo.hardness}
            scariness={todo.scariness}
            isReady={todo.isReady}
            onUpdateTodo={props.onUpdateTodo}
            onDeleteTodo={props.onDeleteTodo}
            onFetchDaysHandler={props.onFetchDaysHandler}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
