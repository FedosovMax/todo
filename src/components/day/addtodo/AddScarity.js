import React from 'react';
import { useState } from 'react'

import classes from './AddScarity.module.css'

let SCARITY_LIST = ['not scary', 'little scary', 'scary', 'terrifying']

const AddScarity = (props) => {
  const [scarityState, setScarityState] = useState(props.init)

  const chooseScarityStateHandler = () => {
    console.log(scarityState)
    if (scarityState === 'not scary') {
      setScarityState(SCARITY_LIST[1]);
      props.onAddScarity(SCARITY_LIST[1]);
      return scarityState
    }
    if (scarityState === 'little scary') {
      setScarityState(SCARITY_LIST[2]);
      props.onAddScarity(SCARITY_LIST[2]);
      return scarityState
    }
    if (scarityState === 'scary') {
      setScarityState(SCARITY_LIST[3]);
      props.onAddScarity(SCARITY_LIST[3]);
      return scarityState
    }
    if (scarityState === 'terrifying') {
      setScarityState(SCARITY_LIST[0]);
      props.onAddScarity(SCARITY_LIST[4]);
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

export default AddScarity
