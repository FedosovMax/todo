import { Fragment, useState} from 'react';

import classes from "./Todo.module.css";
import Heavity from "./Heavity";
import Scarity from "./Scarity";

const Todo = (props) => {
  const [isReady, setIsReady] = useState(false);

  const makeReadyHandler = () => {
    console.log("Task is ready");
    setIsReady(true);
  };

  return (
    <Fragment>
      <div className={classes.todo}>
        <div className={classes.todoName}>
          <p>Buy a toothpaste</p>
        </div>
        <Heavity />
        <Scarity />
        <div className={classes.ready}>
          <button onClick={makeReadyHandler} className="btn">
            DONE
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
