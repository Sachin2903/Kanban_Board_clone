import React from 'react'
import { Fragment } from "react";
import { RxCross1 } from 'react-icons/rx'
import StyleSheet from './stepTask.module.css'

export function SecondStepTaskComp({ statePass, setStatePass }) {
  
  function handleInitialTaskClick() {
        setStatePass(false);
  };



  return (
    <Fragment>
      <div className={StyleSheet.initialBox}>

        <input type="text" placeholder='Enter list title...' />


        <button onClick={handleInitialTaskClick} className={StyleSheet.addButton}> Add list</button>
        <RxCross1 className={StyleSheet.crossIcon} />

      </div>
    </Fragment>
  )
}

