import { Fragment, useRef, useState } from "react";

import classes from "./AddTodo.module.css";
import Heavity from "../todo/Heavity";
import Scarity from "../todo/Scarity";

const AddTodo = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredText = textInputRef.current.value;
  }

  const addTodoHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <div className={classes.addtodo}>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          <div className={classes.control}>
            <textarea id="text" rows={1} ref={textInputRef}></textarea>
          </div>
        </form>
        <Heavity />
        <Scarity />
        <div className={classes.actions}>
            <button onClick={addTodoHandler} className="btn">
              Add
            </button>
          </div>
      </div>
    </Fragment>
  );
};

export default AddTodo;
