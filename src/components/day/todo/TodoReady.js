import { Fragment, useState } from 'react'

import classes from './TodoReady.module.css'
import HardnessReady from './HardnessReady'
import Scarity from './Scarity'

const TodoReady = (props) => {
  const [isReady, setIsReady] = useState(props.isReady)
  const [enteredSaveHardness, setEnteredSaveHardness] = useState(props.hardness);

  const deleteHandler = () => {
    props.onDeleteTodo(props.id);
  }

  // const changeHardnessHandler = (hardnessData) => {
  //   setEnteredSaveHardness(hardnessData)
  // };

  const makeReadyHandler = () => {
    if (isReady === true) {
      setIsReady(false);
    } else {
      setIsReady(true);
    }
    props.onUpdateTodo({
      id: props.id, 
      hardness: enteredSaveHardness, 
      scariness: props.scariness, 
      dayTodoName: props.dayTodoName, 
      isReady: isReady
    });
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
        <HardnessReady hardness={props.hardness} />
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
