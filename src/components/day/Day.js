import React, { useState, useEffect, useCallback } from 'react'
import classes from './Day.module.css'
import TodoList from './todo/TodoList'
import AddTodo from './addtodo/AddTodo'

const Day = () => {
  const [todoList, setTodoList] = useState([])
  const [error, setError] = useState(null)

  const fetchTodosHandler = useCallback(async () => {
    // setIsLoading(true);
    setError(null)
    try {
      const response = await fetch(
        'https://todo-6d56a-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
      )
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()

      const loadedTodos = []

      for (const key in data) {
        loadedTodos.push({
          id: key,
          text: data[key].text,
          hardness: data[key].hardness,
          scarity: data[key].scarity,
          ready: false,
        })
      }

      setTodoList(loadedTodos)
    } catch (error) {
      setError(error.message)
    }
    // setIsLoading(false);
  }, [])

  async function onAddTodoHandler(todo) {
    const response = await fetch(
      'https://todo-6d56a-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
      {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
  }

  async function onUpdateTodoHandler(todo) {
    const response = await fetch(
      'https://todo-6d56a-default-rtdb.europe-west1.firebasedatabase.app/todos/' +
        todo.key +
        '.json',
      {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
  }

  // const onAddTodoHandler = (props) => {

  //   setTodoList((prevTodoList) => {
  //     return [
  //       ...prevTodoList,
  //       {
  //         text: props.text,
  //         hardness: props.hardness,
  //         scarity: props.scarity,
  //         isReady: false,
  //         id: Math.random().toString(),
  //       },
  //     ]
  //   })
  // }

  useEffect(() => {
    fetchTodosHandler()
  }, [onAddTodoHandler])

  return (
    <div className={classes.day}>
      <AddTodo onAddTodo={onAddTodoHandler} />
      <TodoList todos={todoList} onUpdateTodo={onUpdateTodoHandler} />
    </div>
  )
}

export default Day
