import { Fragment, useRef, useState } from "react";

import classes from "./AddTodo.module.css";
import AddHardness from "./AddHardness";
import AddScarity from "./AddScarity";
import NOT_SCARY from "../../../assets/NOT_SCARY.png";
import NOT_HARD from "../../../assets/NOT_HARD.png";

const AddTodo = (props) => {
//   const [isEntering, setIsEntering] = useState(false);
const [enteredHardness, setEnteredHardness] = useState(NOT_HARD);
const [enteredScarity, setEnteredScarity] = useState(NOT_SCARY);
const [enteredSaveHardness, setEnteredSaveHardness] = useState('NOT_HARD');
const [enteredSaveScarity, setEnteredSaveScarity] = useState('NOT_SCARY');
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
  }

  const addTodoHandler = () => {
    // setIsEntering(false);
    const enteredText = textInputRef.current.value;

    props.onAddTodo({
      dayTodoName: enteredText,
      hardness: enteredSaveHardness,
      scariness: enteredSaveScarity,
      isReady: false,
    });

    setEnteredHardness(NOT_HARD)
    setEnteredScarity(NOT_SCARY)

    textInputRef.current.value = ''
  };

//   const formFocusedHandler = () => {
//     setIsEntering(true);
//   };

  const addHardnessHandler = (hardnessData) => {
    setEnteredHardness(hardnessData);
    setEnteredSaveHardness(hardnessData)
  };

  const addScarityHandler = (scarityData) => {
    setEnteredScarity(scarityData);
    setEnteredSaveScarity(scarityData)
  };

  return (
    <Fragment>
      <div className={classes.addtodo}>
        <form
        //   onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          <div className={classes.control}>
            <textarea id="dayTodoName" rows={1} ref={textInputRef}></textarea>
          </div>
        </form>
        <AddHardness
          onAddHardness={addHardnessHandler}
          init={enteredHardness}
        />
        <AddScarity
          onAddScarity={addScarityHandler}
          init={enteredScarity}
        />
        <div className={classes.actions}>
          <button type="submit" onClick={addTodoHandler} className="btn">
            Add
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddTodo;
