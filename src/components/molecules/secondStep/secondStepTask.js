import React from 'react'
import { Fragment,useRef } from "react";
import { RxCross1 } from 'react-icons/rx'
import StyleSheet from './stepTask.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {websiteTodoSlice} from "../../../slice/websiteTodoSlice"

export function SecondStepTaskComp({ statePass, setStatePass }) {
 const dispatchToAdd=useDispatch();
  const inputRef=useRef("");

  function handleInitialTaskClick() {
   if(inputRef.current.value.trim().length<=0){
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
    }else{

      dispatchToAdd(websiteTodoSlice.actions.addToDoList(inputRef.current.value.trim()))
      inputRef.current.value="";
      
      toast.success('WoW one Added successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });

        setStatePass(false)
    }
  };




  return (
    <Fragment>
      <div className={StyleSheet.initialBox}>

        <input className={StyleSheet.inputToAdd} ref={inputRef} type="text" placeholder='Enter list title...' />


        <button onClick={handleInitialTaskClick} className={StyleSheet.addButton}> Add list</button>
        <RxCross1 onClick={()=> {setStatePass(false)
        inputRef.current.value="";
        }} className={StyleSheet.crossIcon} />

      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />


    </Fragment>
  )
}

