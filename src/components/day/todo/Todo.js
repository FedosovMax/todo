import { Fragment, useState} from 'react';

import classes from "./Todo.module.css";
import TodoInput from "./TodoInput";
import Heavity from "./Heavity";
import Scarity from "./Scarity";

const Todo = () => {
  const [isReady, setIsReady] = useState(false);

  const makeReadyHandler = () => {
    setIsReady(true);
  };

  return (
    <Fragment>
      <div className={classes.todo}>
        <TodoInput />
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
