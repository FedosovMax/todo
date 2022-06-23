import { Fragment, useRef, useState } from "react";

import classes from "./AddTodo.module.css";
import AddHardness from "./AddHardness";
import AddScarity from "./AddScarity";

const AddTodo = (props) => {
//   const [isEntering, setIsEntering] = useState(false);
  const textInputRef = useRef();
  //   const hardnessInputRef = useRef();
  //   const scarityInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
  }

  var enteredHardness = 'easy';
  var enteredScarity = 'not scary';

  const addTodoHandler = () => {
    // setIsEntering(false);
    const enteredText = textInputRef.current.value;

    props.onAddTodo({
      text: enteredText,
      hardness: enteredHardness,
      scarity: enteredScarity,
      isReady: false,
    });
  };

//   const formFocusedHandler = () => {
//     setIsEntering(true);
//   };

  const addHardnessHandler = (hardnessData) => {
    // console.log(hardnessData);
    enteredHardness = hardnessData;
  };

  const addScarityHandler = (scarityData) => {
    // console.log("handle Scarity");
    enteredScarity = scarityData;
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
            <textarea id="text" rows={1} ref={textInputRef}></textarea>
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
