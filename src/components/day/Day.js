import React, { useState, useEffect, useCallback } from 'react'
import classes from './Day.module.css'
import TodoList from './todo/TodoList'
import TodoReadyList from './todo/TodoReadyList'
import AddTodo from './addtodo/AddTodo'

const Day = () => {
  const [todoList, setTodoList] = useState([])
  const [todoReadyList, setTodoReadyList] = useState([])
  const [error, setError] = useState(null)
  const [dayId, setDayId] = useState(null)

  useEffect(() => {
      fetchDaysHandler()
   }, []);

  const fetchDaysHandler = useCallback(async () => {
    setError(null)
    try {
        const response = await fetch(
          'http://localhost:8080/api/v1/days',
        )
        if (response.status != 302) {
          throw new Error('Something went wrong!')
        }
  
        const data = await response.json()
        setDayId(data[0].id)
    } catch (error) {
      setError(error.message)
    }
  }, [])

  const fetchTodosHandler = useCallback(async () => {
    setError(null)
    try {
      const response = await fetch(
        'http://localhost:8080/api/v1/days/' + dayId + '/todos',
      )
      if (response.status != 302) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()
      console.log(data)

      const loadedTodos = []
      const loadedReadyTodos = []

      for (const key in data) {
        if (data[key].ready === false) {
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
  }, [dayId])

  async function onAddTodoHandler(todo) {
    const response = await fetch(
      'http://localhost:8080/api/v1/days/' + dayId + '/todos',
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
      'http://localhost:8080/api/v1/days/' + dayId +
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
      'http://localhost:8080/api/v1/days/' + dayId +
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
      'http://localhost:8080/api/v1/days/' + dayId +
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
