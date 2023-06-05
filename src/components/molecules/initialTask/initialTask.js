import { Fragment } from "react";
import {IoAddOutline} from 'react-icons/io5'
import StyleSheet from './initialTask.module.css'
import { useState } from "react";
import { SecondStepTaskComp } from "../secondStep/secondStepTask";


export function InitialTask(){
    const [showEditBox, setShowEditBox] = useState(false);

    const handleInitialTaskClick = () => {
        console.log('hello')
        setShowEditBox(true);
      };

    return(
        <Fragment>
             {showEditBox ? (
                      <SecondStepTaskComp />

                    ) : (
                        <div className={StyleSheet.initialBox} onClick={handleInitialTaskClick}>
                        <IoAddOutline style={{color:"white"}} />
                        <p className={StyleSheet.taskText}>Add a list</p>
                    </div> 
                    )}
            
        </Fragment>
    )
}