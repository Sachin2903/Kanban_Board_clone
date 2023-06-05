import React from 'react'
import { Fragment } from "react";
import {RxCross1} from 'react-icons/rx'
import StyleSheet from './stepTask.module.css'

export function SecondStepTaskComp()  {
  return (
    <Fragment>
         <div className={StyleSheet.initialBox}>
               <div className={StyleSheet.top}>
                  <input type="text" placeholder='Enter list title...'/>
               </div>
               <div className={StyleSheet.bottom}>
                  <button className={StyleSheet.addButton}> Add list</button>
                  <RxCross1 className={StyleSheet.crossIcon}/>
               </div>
         </div>
    </Fragment>
  )
}

