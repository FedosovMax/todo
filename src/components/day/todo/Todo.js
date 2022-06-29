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
    setIsReady(true);
    props.onUpdateTodo({id: props.id, hardness: props.hardness, scarity: props.scarity, text: props.text, isReady: true});
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
          <p>{props.text}</p>
        </div>
        <Hardness hardness={props.hardness} />
        <Scarity scarity={props.scarity} />
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
