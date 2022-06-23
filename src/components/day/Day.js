import React, { useState } from "react";
import classes from "./Day.module.css";
import TodoList from "./todo/TodoList";
import AddTodo from "./addtodo/AddTodo";

const DUMMY_TODO = [
  {
    id: "1",
    text: "Do something",
    hardness: "easy",
    scarity: "scary",
    ready: false,
  },
  {
    id: "2",
    text: "Buy something",
    hardness: "hard",
    scarity: "scary",
    isReady: false,
  },
];

const Day = () => {
  const [todoList, setTodoList] = useState([]);

  const onAddTodoHandler = (props) => {
    // console.log("onAddTodoHandler")
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          text: props.text,
          hardness: props.hardness,
          scarity: props.scarity,
          isReady: false,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className={classes.day}>
      <AddTodo onAddTodo={onAddTodoHandler} />
      <TodoList todos={todoList} />
    </div>
  );
};

export default Day;
