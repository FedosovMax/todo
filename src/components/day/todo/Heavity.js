import { useState } from 'react';

import classes from './Heavity.module.css'

let HEAVITY_LIST = ['easy', 'medium', 'hard', 'impossible']

const Heavity = (props) => {
  const [heavityState, setHeavityState] = useState(props.heavity)

  const chooseHeavityStateHandler = () => {
    console.log(heavityState)
    if (heavityState === 'easy') {
      setHeavityState(HEAVITY_LIST[1])
      return heavityState
    }
    if (heavityState === 'medium') {
      setHeavityState(HEAVITY_LIST[2])
      return heavityState
    }
    if (heavityState === 'hard') {
      setHeavityState(HEAVITY_LIST[3])
      return heavityState
    }
    if (heavityState === 'impossible') {
      setHeavityState(HEAVITY_LIST[0])
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

export default Heavity
