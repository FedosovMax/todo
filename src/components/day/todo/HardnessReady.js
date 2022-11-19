import { useState, useEffect } from 'react';

import classes from './Hardness.module.css'
import NOT_HARD from "../../../assets/NOT_HARD.png";
import HARD from "../../../assets/HARD.png";
import VERY_HARD from "../../../assets/VERY_HARD.png";
import EXTRAORDINARY from "../../../assets/EXTRAORDINARY.png";
import IMPOSSIBLE from "../../../assets/IMPOSSIBLE.png";

let HARDNESS_LIST = [NOT_HARD, HARD, VERY_HARD, EXTRAORDINARY, IMPOSSIBLE]
let HARDNESS_SAVE_LIST = ["NOT_HARD", "HARD", "VERY_HARD", "EXTRAORDINARY", "IMPOSSIBLE"]

const HardnessReady = (props) => {
  const [heavityState, setHeavityState] = useState(props.hardness)

  useEffect(() => {
    chooseInitHeavityStateHandler()
  }, []);

  const chooseInitHeavityStateHandler = () => {
    if (props.hardness === 'NOT_HARD') {
      setHeavityState(NOT_HARD)
    }
    if (props.hardness === 'HARD') {
      setHeavityState(HARD)
    }
    if (props.hardness === 'VERY_HARD') {
      setHeavityState(VERY_HARD)
    }
    if (props.hardness === 'EXTRAORDINARY') {
      setHeavityState(EXTRAORDINARY)
    }
    if (props.hardness === 'IMPOSSIBLE') {
      setHeavityState(IMPOSSIBLE)
    }
  }

  // const chooseHeavityStateHandler = () => {
  //   if (heavityState === NOT_HARD) {
  //     setHeavityState(HARDNESS_LIST[1])
  //     props.onChangeHardness(HARDNESS_SAVE_LIST[1]);
  //     return NOT_HARD
  //   }
  //   if (heavityState === HARD) {
  //     setHeavityState(HARDNESS_LIST[2])
  //     props.onChangeHardness(HARDNESS_SAVE_LIST[2]);
  //     return HARD
  //   }
  //   if (heavityState === VERY_HARD) {
  //     setHeavityState(HARDNESS_LIST[3])
  //     props.onChangeHardness(HARDNESS_SAVE_LIST[3]);
  //     return VERY_HARD
  //   }
  //   if (heavityState === EXTRAORDINARY) {
  //     setHeavityState(HARDNESS_LIST[4])
  //     props.onChangeHardness(HARDNESS_SAVE_LIST[4]);
  //     return EXTRAORDINARY
  //   }
  //   if (heavityState === IMPOSSIBLE) {
  //     setHeavityState(HARDNESS_LIST[0])
  //     props.onChangeHardness(HARDNESS_SAVE_LIST[0]);
  //     return IMPOSSIBLE
  //   }
  // }

  return (
    <div className={classes.heavity}>
      <button className="btn">
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

export default HardnessReady;
