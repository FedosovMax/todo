import { Fragment, useState } from 'react'

import classes from './Todo.module.css'
import Hardness from './Hardness'
import Scarity from './Scarity'

const Todo = (props) => {
  const [isReady, setIsReady] = useState(props.isReady)

  // const prepareTodo = () => {
  //   props.setIsReady(true)
  //   props.onUpdateHander()
  // }

  const makeReadyHandler = () => {
    props.onUpdateHander(id={props.id}, hardness={props.hardness}, scariness={props.scariness}, text={props.text}, isReady=true)
  }

  return (
    <Fragment>
      <div className={classes.todo}>
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
