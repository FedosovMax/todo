import { useState, useEffect } from 'react';

import classes from './Hardness.module.css'
import NOT_HARD from "../../../assets/NOT_HARD.png";
import HARD from "../../../assets/HARD.png";
import VERY_HARD from "../../../assets/VERY_HARD.png";
import EXTRAORDINARY from "../../../assets/EXTRAORDINARY.png";
import IMPOSSIBLE from "../../../assets/IMPOSSIBLE.png";

let HARDNESS_LIST = [NOT_HARD, HARD, VERY_HARD, EXTRAORDINARY, IMPOSSIBLE]
let HARDNESS_SAVE_LIST = ["NOT_HARD", "HARD", "VERY_HARD", "EXTRAORDINARY", "IMPOSSIBLE"]

const Hardness = (props) => {
  const [heavityState, setHeavityState] = useState(props.hardness)
  const [readyHeavityState, setReadyHeavityState] = useState()
  const [textHeavityState, setTextHeavityState] = useState(props.hardness)

  useEffect(() => {
    chooseInitHeavityStateHandler()
    console.log(heavityState + 19)
  }, [props.changed === true]);

  // useEffect(() => {
  //   //Runs on every render
  //   chooseInitHeavityStateHandler()
  //   console.log(heavityState + 25)
  // });

  const chooseInitHeavityStateHandler = () => {
    if (props.hardness === "NOT_HARD") {
      setHeavityState(NOT_HARD)
      setTextHeavityState("NOT_HARD")
      console.log(heavityState + 26)
    }
    if (props.hardness === "HARD") {
      setHeavityState(HARD)
      setTextHeavityState("HARD")
      console.log(heavityState + 31)
    }
    if (props.hardness === "VERY_HARD") {
      setHeavityState(VERY_HARD)
      setTextHeavityState("VERY_HARD")
    }
    if (props.hardness === "EXTRAORDINARY") {
      setHeavityState(EXTRAORDINARY)
      setTextHeavityState("EXTRAORDINARY")
    }
    if (props.hardness === "IMPOSSIBLE") {
      setHeavityState(IMPOSSIBLE)
      setTextHeavityState("IMPOSSIBLE")
    }
  }

  const chooseHeavityStateHandler = () => {
    if (textHeavityState === "NOT_HARD") {
      setHeavityState(HARD)
      setTextHeavityState("HARD")
      props.onChangeHardness("HARD");
      console.log(heavityState + 52)
      // return NOT_HARD
    }
    if (heavityState === HARD) {
      setHeavityState(VERY_HARD)
      setTextHeavityState("VERY_HARD")
      props.onChangeHardness("VERY_HARD");
      console.log(heavityState + 59)
      // return HARD
    }
    if (heavityState === VERY_HARD) {
      setHeavityState(EXTRAORDINARY)
      setTextHeavityState("EXTRAORDINARY")
      props.onChangeHardness("EXTRAORDINARY");
      // return VERY_HARD
    }
    if (heavityState === EXTRAORDINARY) {
      setHeavityState(IMPOSSIBLE)
      setTextHeavityState("IMPOSSIBLE")
      props.onChangeHardness("IMPOSSIBLE");
      // return EXTRAORDINARY
    }
    if (heavityState === IMPOSSIBLE) {
      setHeavityState(NOT_HARD)
      setTextHeavityState("NOT_HARD")
      props.onChangeHardness("NOT_HARD");
      // return IMPOSSIBLE
    }
  }

  return (
    <div className={classes.heavity}>
      <button onClick={chooseHeavityStateHandler} className="btn">
      <img src={heavityState} alt="Heavity" />
      </button>
    </div>
  )
}

// const chooseHeavityStateHandler = () => {
//   // console.log(heavityState)
//   if (heavityState === 'easy') {
//     setHeavityState(HARDNESS_LIST[1])
//     return heavityState 
//   }
//   if (heavityState === 'medium') {
//     setHeavityState(HARDNESS_LIST[2])
//     return heavityState
//   }
//   if (heavityState === 'hard') {
//     setHeavityState(HARDNESS_LIST[3])
//     return heavityState
//   }
//   if (heavityState === 'impossible') {
//     setHeavityState(HARDNESS_LIST[0])
//     return heavityState
//   }
// }

// const getHeavityState = () => {
//   return heavityState
// }

// return (
//   <div className={classes.heavity}>
//     <button onClick={chooseHeavityStateHandler} className="btn">
//       {heavityState}
//     </button>
//   </div>
// )
// }

export default Hardness;
