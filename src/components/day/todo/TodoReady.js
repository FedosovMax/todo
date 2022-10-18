import { Fragment, useState } from 'react'

import classes from './TodoReady.module.css'
import Hardness from './Hardness'
import Scarity from './Scarity'

const TodoReady = (props) => {
  const [isReady, setIsReady] = useState(props.isReady)

  const deleteHandler = () => {
    props.onDeleteTodo(props.id);
  }

  const makeReadyHandler = () => {
    if (isReady === true) {
      setIsReady(false);
    } else {
      setIsReady(true);
    }
    props.onUpdateTodo({id: props.id, hardness: props.hardness, scariness: props.scariness, dayTodoName: props.dayTodoName, isReady: isReady});
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
            UNDO
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default TodoReady
