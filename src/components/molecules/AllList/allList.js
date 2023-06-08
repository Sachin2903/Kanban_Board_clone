import styles from "./allList.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment,useRef } from "react";
import { HiPencil } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {websiteTodoSlice} from "../../../slice/websiteTodoSlice"
export function AllList({toggleStatusOfMin,minTitle,idForMinCross,idForMain}) {
   const navToDes=useNavigate()
   const inputChangeMinNameRef=useRef();
   const dispatchForMinList=useDispatch();


 function deleteMinListFun(){
   dispatchForMinList(websiteTodoSlice.actions.deleteMinList({mainId:idForMain,idToDelete:idForMinCross}))

 }
 function changeMinTitleFun(){
   dispatchForMinList(websiteTodoSlice.actions.ToogleMinList({mainId:idForMain,idToToggle:idForMinCross}))

 }

 function changeTitleNameFun(){
   if(inputChangeMinNameRef.current.value.trim().length>0){
      dispatchForMinList(websiteTodoSlice.actions.changeMinTitle({mainId:idForMain,idToChnageMinTitle:idForMinCross,changeName:(inputChangeMinNameRef.current.value.trim())}))
      toast.success('Successfully Changed', {
         position: "bottom-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: false,
         progress: undefined,
         theme: "light",
     });
     dispatchForMinList(websiteTodoSlice.actions.ToogleMinList({mainId:idForMain,idToToggle:idForMinCross}))
     inputChangeMinNameRef.current.value="";
  
   }else{

      toast.error(' Add someThing !', {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: false,
         progress: undefined,
         theme: "colored",
         });
   }
 }


 function openDesActivityPage(){
  navToDes(`/description/${idForMain}/${idForMinCross}`)
 }


   
   return(
     <Fragment>
        <div className={styles.minToDoList}>
   {
         (toggleStatusOfMin)?(
         <div className={styles.minTitleEdit}>
           <input ref={inputChangeMinNameRef} className={styles.minTitleEditInput}/>
         <button onClick={changeTitleNameFun} className={styles.minTitleEditButton}>save</button>

         </div>):(<div></div>)
        
         }
            <p onClick={openDesActivityPage} className={styles.minToDoListMessage}>{minTitle}</p>
             <HiPencil onClick={changeMinTitleFun} className={styles.miniToDoListIconsPencil}/>
             <RxCross2 onClick={deleteMinListFun} className={styles.miniToDoListIconsCross}/>



        </div>
        <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
    </Fragment>
   )

}