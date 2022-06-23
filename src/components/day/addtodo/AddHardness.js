import React from 'react';
import { useState } from 'react';

import classes from './AddHardness.module.css'

let HARDNESS_LIST = ['easy', 'medium', 'hard', 'impossible']

const AddHardness = (props) => {
  const [heavityState, setHeavityState] = useState(props.init)

  // const findActualIndex = (actual) => {
  //   return HARDNESS_LIST.findIndex(actual);
  // }

  const chooseHeavityStateHandler = () => {
    if (heavityState === 'easy') {
      console.log(heavityState);
      setHeavityState(HARDNESS_LIST[1])
      props.onAddHardness(heavityState);
      return heavityState;
    }
    if (heavityState === 'medium') {
      setHeavityState(HARDNESS_LIST[2])
      props.onAddHardness(heavityState);
      return heavityState
    }
    if (heavityState === 'hard') {
      setHeavityState(HARDNESS_LIST[3])
      props.onAddHardness(heavityState);
      return heavityState
    }
    if (heavityState === 'impossible') {
      setHeavityState(HARDNESS_LIST[4])
      props.onAddHardness(heavityState);
      return heavityState
    }
  }

  return (
    <div className={classes.heavity}>
      <button onClick={chooseHeavityStateHandler} className="btn">
        {heavityState}
      </button>
    </div>
  )
}

export default AddHardness;
