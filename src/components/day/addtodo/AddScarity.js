import React from 'react';
import { useState } from 'react'

import classes from './AddScarity.module.css'

let SCARITY_LIST = ['NOT_SCARY', 'LITTLE_SCARY', 'SCARY', 'TERRIFYING']

const AddScarity = (props) => {
  const [scarityState, setScarityState] = useState(props.init)

  const chooseScarityStateHandler = () => {
    if (scarityState === 'NOT_SCARY') {
      setScarityState(SCARITY_LIST[1]);
      props.onAddScarity(SCARITY_LIST[1]);
      return scarityState
    }
    if (scarityState === 'LITTLE_SCARY') {
      setScarityState(SCARITY_LIST[2]);
      props.onAddScarity(SCARITY_LIST[2]);
      return scarityState
    }
    if (scarityState === 'SCARY') {
      setScarityState(SCARITY_LIST[3]);
      props.onAddScarity(SCARITY_LIST[3]);
      return scarityState
    }
    if (scarityState === 'TERRIFYING') {
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
