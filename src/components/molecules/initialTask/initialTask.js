import { Fragment } from "react";
import {IoAddOutline} from 'react-icons/io5'
import StyleSheet from './initialTask.module.css'
import { useState } from "react";
import { EditOpenBox } from "../editOpenBox/editOpenBox";


export function InitialTask(){
    const [showEditBox, setShowEditBox] = useState(false);

    const handleInitialTaskClick = () => {
        console.log('hello')
        setShowEditBox(true);
      };

    return(
        <Fragment>
             {showEditBox ? (
                      <EditOpenBox />

                    ) : (
                        <div className={StyleSheet.initialBox} onClick={handleInitialTaskClick}>
                        <IoAddOutline />
                        <p>Add a list</p>
                    </div> 
                    )}
            
        </Fragment>
    )
}