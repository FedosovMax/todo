import { Fragment, useState } from 'react'

import classes from './Todo.module.css'
import Hardness from './Hardness'
import Scarity from './Scarity'

const Todo = (props) => {
  const [isReady, setIsReady] = useState(props.isReady)

  const deleteHandler = () => {
    props.onDeleteTodo(props.id);
  }

  const makeReadyHandler = () => {
    if (isReady === true) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
    props.onUpdateTodo({id: props.id, hardness: props.hardness, scariness: props.scariness, dayTodoName: props.dayTodoName, isReady: true});
  }

  return (
    <Fragment>
      <div className={classes.todo}>
        <div className={classes.delete}>
          <button onClick={deleteHandler} className="btn">
            X
          </button>
        </div>
        <div className={classes.todoName}>
          <p>{props.dayTodoName}</p>
        </div>
        <Hardness hardness={props.hardness} />
        <Scarity scariness={props.scariness} />
        <div className={classes.ready}>
          <button onClick={makeReadyHandler} className="btn">
            DONE
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Todo
