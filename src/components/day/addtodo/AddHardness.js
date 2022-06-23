import React from 'react';
import { useState } from 'react';

import classes from './AddHardness.module.css'

let HARDNESS_LIST = ['easy', 'medium', 'hard', 'impossible']

const AddHardness = (props) => {
  const [heavityState, setHeavityState] = useState(props.init)

  const chooseHeavityStateHandler = () => {
    if (heavityState === 'easy') {
      setHeavityState(HARDNESS_LIST[1])
      props.onAddHardness(HARDNESS_LIST[1]);
      return heavityState;
    }
    if (heavityState === 'medium') {
      setHeavityState(HARDNESS_LIST[2])
      props.onAddHardness(HARDNESS_LIST[2]);
      return heavityState
    }
    if (heavityState === 'hard') {
      setHeavityState(HARDNESS_LIST[3])
      props.onAddHardness(HARDNESS_LIST[3]);
      return heavityState
    }
    if (heavityState === 'impossible') {
      setHeavityState(HARDNESS_LIST[0])
      props.onAddHardness(HARDNESS_LIST[0]);
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
