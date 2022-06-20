import { useState } from 'react'

import classes from './Scarity.module.css'

let SCARITY_LIST = ['Not Scarry', 'Little Scarry', 'Scarry', 'Terrifying']

const Scarity = () => {
  const [scarityState, setScarityState] = useState(SCARITY_LIST[0])

  const chooseScarityStateHandler = () => {
    console.log(scarityState)
    if (scarityState === 'Not Scarry') {
      setScarityState(SCARITY_LIST[1])
      return scarityState
    }
    if (scarityState === 'Little Scarry') {
      setScarityState(SCARITY_LIST[2])
      return scarityState
    }
    if (scarityState === 'Scarry') {
      setScarityState(SCARITY_LIST[3])
      return scarityState
    }
    if (scarityState === 'Terrifying') {
      setScarityState(SCARITY_LIST[0])
      return scarityState
    }
  }

  return (
    <div className={classes.scarity}>
      <button onClick={chooseScarityStateHandler} className="btn">
        {scarityState}
      </button>
    </div>
  )
}

export default Scarity
