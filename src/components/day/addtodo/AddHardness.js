import React from 'react';
import { useState } from 'react';

import classes from './AddHardness.module.css'

let HARDNESS_LIST = ['NOT_HARD', 'HARD', 'VERY_HARD', 'EXTRAORDINARY', 'IMPOSSIBLE']

const AddHardness = (props) => {
  const [heavityState, setHeavityState] = useState(props.init)

  const chooseHeavityStateHandler = () => {
    if (heavityState === 'NOT_HARD') {
      setHeavityState(HARDNESS_LIST[1])
      props.onAddHardness(HARDNESS_LIST[1]);
      console.log(heavityState)
      return heavityState;
    }
    if (heavityState === 'HARD') {
      setHeavityState(HARDNESS_LIST[2])
      props.onAddHardness(HARDNESS_LIST[2]);
      console.log(heavityState)
      return heavityState
    }
    if (heavityState === 'VERY_HARD') {
      setHeavityState(HARDNESS_LIST[3])
      props.onAddHardness(HARDNESS_LIST[3]);
      console.log(heavityState)
      return heavityState
    }
    if (heavityState === 'EXTRAORDINARY') {
      setHeavityState(HARDNESS_LIST[4])
      props.onAddHardness(HARDNESS_LIST[4]);
      console.log(heavityState)
      return heavityState
    }
    if (heavityState === 'IMPOSSIBLE') {
      setHeavityState(HARDNESS_LIST[0])
      props.onAddHardness(HARDNESS_LIST[0]);
      console.log(heavityState)
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
