import React, { useState, useEffect, useCallback } from 'react'
import classes from './Day.module.css'
import TodoList from './todo/TodoList'
import TodoReadyList from './todo/TodoReadyList'
import AddTodo from './addtodo/AddTodo'

const Day = () => {
  const [todoList, setTodoList] = useState([])
  const [todoReadyList, setTodoReadyList] = useState([])
  const [error, setError] = useState(null)

  const day = null;

  const fetchDaysHandler = useCallback(async () => {
    setError(null)

    if (day == null) {
      try {
        const response = await fetch(
          'http://localhost:8080/api/v1/days',
        )
        if (response.status != 302) {
          throw new Error('Something went wrong!')
        }
  
        const data = await response.json()
  
        day = data[0]

      } catch (error) {
        setError(error.message)
      }
    }
  }, [])

  const fetchTodosHandler = useCallback(async () => {
    // setIsLoading(true);
    setError(null)

    try {
      const response = await fetch(
        // 'https://todo-6d56a-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
        'http://localhost:8080/api/v1/days/' + day.id +
        '/todos',
      )
      if (response.status != 302) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()
      console.log(data)

      const loadedTodos = []
      const loadedReadyTodos = []

      for (const key in data) {
        if (data[key].ready == false) {
          loadedTodos.push({
            id: data[key].id,
            dayTodoName: data[key].dayTodoName,
            hardness: data[key].hardness,
            scariness: data[key].scariness,
            ready: false,
          })
        } else {
          loadedReadyTodos.push({
            id: data[key].id,
            dayTodoName: data[key].dayTodoName,
            hardness: data[key].hardness,
            scariness: data[key].scariness,
            ready: false,
          })
        }
        
      }

      setTodoList(loadedTodos)
      setTodoReadyList(loadedReadyTodos)
    } catch (error) {
      setError(error.message)
    }
    // setIsLoading(false);
  }, [])

  async function onAddTodoHandler(todo) {
    const response = await fetch(
      'http://localhost:8080/api/v1/days/' + day.id +
      '/todos',
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
      'http://localhost:8080/api/v1/days/' + day.id +
      '/todos/' + todo.id +
      '/ready?ready=' +
      todo.isReady,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
  }

  async function onUpdateReadyTodoHandler(todo) {
    const response = await fetch(
      'http://localhost:8080/api/v1/days/' + day.id +
      '/todos/' + todo.id +
      '/ready?ready=' +
      todo.isReady,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
  }

  async function onDeleteTodoHandler(key) {
    console.log('delete');
    const response = await fetch(
      'http://localhost:8080/api/v1/days/' + day.id +
      '/todos/' +
      key,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    // const data = await response.json()
  }

  // useEffect(() => {
  //   fetchDaysHandler()
  // }, [onAddTodoHandler])

  useEffect(() => {
    fetchTodosHandler()
  }, [onAddTodoHandler])

  return (
    <div className={classes.day}>
      <AddTodo onAddTodo={onAddTodoHandler} />
      <TodoList todos={todoList} onUpdateTodo={onUpdateTodoHandler} onDeleteTodo={onDeleteTodoHandler}/>
      <TodoReadyList todos={todoReadyList} onUpdateTodo={onUpdateReadyTodoHandler} onDeleteTodo={onDeleteTodoHandler}/>
    </div>
  )
}

export default Day
