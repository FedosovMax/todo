import React from 'react';
import { useState } from 'react';

import classes from './AddHardness.module.css'

let HARDNESS_LIST = ['easy', 'medium', 'hard', 'impossible']

const AddHardness = React.forwardRef((props, ref) => {
  const [heavityState, setHeavityState] = useState(HARDNESS_LIST[0])

  const chooseHeavityStateHandler = () => {
    console.log(heavityState)
    if (heavityState === 'easy') {
      setHeavityState(HARDNESS_LIST[1])
      props.onAddHardness(heavityState);
      return heavityState 
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
      setHeavityState(HARDNESS_LIST[0])
      props.onAddHardness(heavityState);
      return heavityState
    }
  }

  return (
    <div className={classes.heavity}>
      <button onClick={chooseHeavityStateHandler} ref={ref} className="btn">
        {heavityState}
      </button>
    </div>
  )
});

export default AddHardness;
