import React from 'react';
import { useState } from 'react'

import classes from './AddScarity.module.css'
import NOT_SCARY from "../../../assets/NOT_SCARY.png";
import LITTLE_SCARY from "../../../assets/LITTLE_SCARY.png";
import SCARY from "../../../assets/SCARY.png";
import TERRIFYING from "../../../assets/TERRIFYING.png";

let SCARITY_LIST = [NOT_SCARY, LITTLE_SCARY, SCARY, TERRIFYING]
let SCARITY_SAVE_LIST = ["NOT_SCARY", "LITTLE_SCARY", "SCARY", "TERRIFYING"]

const AddScarity = (props) => {
  const [scarityState, setScarityState] = useState(props.init)

  const chooseScarityStateHandler = () => {
    if (scarityState === NOT_SCARY) {
      setScarityState(SCARITY_LIST[1]);
      props.onAddScarity(SCARITY_SAVE_LIST[1]);
      return scarityState
    }
    if (scarityState === LITTLE_SCARY) {
      setScarityState(SCARITY_LIST[2]);
      props.onAddScarity(SCARITY_SAVE_LIST[2]);
      return scarityState
    }
    if (scarityState === SCARY) {
      setScarityState(SCARITY_LIST[3]);
      props.onAddScarity(SCARITY_SAVE_LIST[3]);
      return scarityState
    }
    if (scarityState === TERRIFYING) {
      setScarityState(SCARITY_LIST[0]);
      props.onAddScarity(SCARITY_SAVE_LIST[0]);
      return scarityState
    }
  }

  return (
    // <div className={classes.scarity}>
      <div className={classes.scarity}>
      <button onClick={chooseScarityStateHandler} className="btn">
      <img src={scarityState} alt="Scarity" />
      </button>
    </div>
  )


  // const [scarityState, setScarityState] = useState(props.init)

  // const chooseScarityStateHandler = () => {
  //   if (scarityState === 'NOT_SCARY') {
  //     setScarityState(SCARITY_LIST[1]);
  //     props.onAddScarity(SCARITY_LIST[1]);
  //     return scarityState
  //   }
  //   if (scarityState === 'LITTLE_SCARY') {
  //     setScarityState(SCARITY_LIST[2]);
  //     props.onAddScarity(SCARITY_LIST[2]);
  //     return scarityState
  //   }
  //   if (scarityState === 'SCARY') {
  //     setScarityState(SCARITY_LIST[3]);
  //     props.onAddScarity(SCARITY_LIST[3]);
  //     return scarityState
  //   }
  //   if (scarityState === 'TERRIFYING') {
  //     setScarityState(SCARITY_LIST[0]);
  //     props.onAddScarity(SCARITY_LIST[0]);
  //     return scarityState
  //   }
  // }

  // return (
  //   // <div className={classes.scarity}>
  //     <div className={classes.scarity}>
  //     <button onClick={chooseScarityStateHandler} className="btn">
  //       {scarityState}
  //     </button>
  //   </div>
  // )
}

export default AddScarity
