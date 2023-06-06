import { Fragment } from "react";


import 'react-toastify/dist/ReactToastify.css';



import {IoAddOutline} from 'react-icons/io5'
import StyleSheet from './initialTask.module.css'
import { useState } from "react";
import { SecondStepTaskComp } from "../secondStep/secondStepTask";
import { useSelector } from 'react-redux';
import { SeparateToDoList } from "../separateToDoList/separateToDoList";
export function InitialTask(){
  
    const [showEditBox, setShowEditBox] = useState(false);

    
    const arrayToBeMap=useSelector((state,action)=>{
        return state.toDoListData
      });
    









    function handleInitialTaskClick(){
        
        setShowEditBox(true);
      };



      
    return(
        <Fragment>
          <div className={StyleSheet.bottomDivForList}>
           {/* map start parent*/
           
          arrayToBeMap.map((e,i)=>{
          
            return <SeparateToDoList titleForPlaceHolder={e.taskTitle} key={i} idOfComp={e.id} dustbinStatus={e.trashStatus}/>


          })
        }
         {/* map start  */}



             {showEditBox ? (
                      <SecondStepTaskComp statePass={showEditBox} setStatePass={setShowEditBox} />

                    ) : (
                        <div className={StyleSheet.initialBox} onClick={handleInitialTaskClick}>
                        <IoAddOutline style={{color:"white"}} />
                        <p  className={StyleSheet.taskText}>Add a list</p>
                    </div> 
                    )}
            </div>
        </Fragment>
    )
}