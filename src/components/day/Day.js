import React, { useState, useEffect, useCallback } from "react";
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
  const [error, setError] = useState(null);

  // async function fetchMoviesHandler() {
  const fetchMoviesHandler = useCallback(async () => {
    // setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://todo-6d56a-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setTodoList(data);

      // const loadedTodos = [];

      // for (const key in data) {
      //   loadedMovies.push({
      //     id: key,
      //     title: data[key].title,
      //     openingText: data[key].openingText,
      //     releaseDate: data[key].releaseDate,
      //   });
      // }
    } catch (error) {
      setError(error.message);
    }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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

    return (
      <div className={classes.day}>
        <AddTodo onAddTodo={onAddTodoHandler} />
        <TodoList todos={todoList} />
      </div>
    );
  };
};
export default Day;
