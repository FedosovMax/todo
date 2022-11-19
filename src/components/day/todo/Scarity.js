import { useState, useEffect } from 'react'

import classes from './Scarity.module.css'
import NOT_SCARY from "../../../assets/NOT_SCARY.png";
import LITTLE_SCARY from "../../../assets/LITTLE_SCARY.png";
import SCARY from "../../../assets/SCARY.png";
import TERRIFYING from "../../../assets/TERRIFYING.png";

let SCARITY_LIST = [NOT_SCARY, LITTLE_SCARY, SCARY, TERRIFYING]

const Scarity = (props) => {
  const [scarityState, setScarityState] = useState(props.scariness)

  useEffect(() => {
    chooseInitScarityStateHandler()
  }, []);

  const chooseInitScarityStateHandler = () => {
    if (props.scariness === 'NOT_SCARY') {
      setScarityState(NOT_SCARY)
    }
    if (props.scariness === 'LITTLE_SCARY') {
      setScarityState(LITTLE_SCARY)
    }
    if (props.scariness === 'SCARY') {
      setScarityState(SCARY)
    }
    if (props.scariness === 'TERRIFYING') {
      setScarityState(TERRIFYING)
    }
  }

  const chooseScarityStateHandler = () => {
    if (scarityState === NOT_SCARY) {
      setScarityState(SCARITY_LIST[1])
      return NOT_SCARY
    }
    if (scarityState === LITTLE_SCARY) {
      setScarityState(SCARITY_LIST[2])
      return LITTLE_SCARY
    }
    if (scarityState === SCARY) {
      setScarityState(SCARITY_LIST[3])
      return SCARY
    }
    if (scarityState === TERRIFYING) {
      setScarityState(SCARITY_LIST[0])
      return TERRIFYING
    }
  }

  return (
    <div className={classes.scarity}>
      <button onClick={chooseScarityStateHandler} className="btn">
      <img src={scarityState} alt="Scarity" />
      </button>
    </div>
  )
}

export default Scarity
