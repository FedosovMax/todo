import { useState } from 'react'

import classes from './Scarity.module.css'

let SCARITY_LIST = ['not scary', 'little scary', 'scary', 'terrifying']

const Scarity = (props) => {
  const [scarityState, setScarityState] = useState(props.scariness)

  const chooseScarityStateHandler = () => {
    console.log(scarityState)
    if (scarityState === 'not scary') {
      setScarityState(SCARITY_LIST[1])
      return scarityState
    }
    if (scarityState === 'little scary') {
      setScarityState(SCARITY_LIST[2])
      return scarityState
    }
    if (scarityState === 'scary') {
      setScarityState(SCARITY_LIST[3])
      return scarityState
    }
    if (scarityState === 'terrifying') {
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
