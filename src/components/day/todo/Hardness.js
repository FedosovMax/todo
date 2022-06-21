import { useState } from 'react';

import classes from './Hardness.module.css'

let HARDNESS_LIST = ['easy', 'medium', 'hard', 'impossible']

const Hardness = (props) => {
  const [heavityState, setHeavityState] = useState(HARDNESS_LIST[0])

  const chooseHeavityStateHandler = () => {
    console.log(heavityState)
    if (heavityState === 'easy') {
      setHeavityState(HARDNESS_LIST[1])
      return heavityState 
    }
    if (heavityState === 'medium') {
      setHeavityState(HARDNESS_LIST[2])
      return heavityState
    }
    if (heavityState === 'hard') {
      setHeavityState(HARDNESS_LIST[3])
      return heavityState
    }
    if (heavityState === 'impossible') {
      setHeavityState(HARDNESS_LIST[0])
      return heavityState
    }
  }

  const getHeavityState = () => {
    return heavityState
  }

  return (
    <div className={classes.heavity}>
      <button onClick={chooseHeavityStateHandler} className="btn">
        {heavityState}
      </button>
    </div>
  )
}

export default Hardness;
