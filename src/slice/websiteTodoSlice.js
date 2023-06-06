import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const websiteTodoSlice = createSlice({
    initialState: [],
    name: "toDoListData",
    reducers: {
        addToDoList: ((state, action) => {
            const addedTodOListData = {
                id: uuidv4(),
                taskTitle: action.payload,
                list: [],
                trashStatus: false,
            }

            return [...state, addedTodOListData]
        }),
        DeleteMyToDoList: ((state, action) => {
            return state.filter((e) => {
                if (action.payload === e.id) {
                    return false;
                }
                return true;
            })
        }),
        toggleTrash: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload) {
                    e.trashStatus = !e.trashStatus;
                }
                return e
            })

        }),
        TitleChnageOfMainToDoList: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload.uniqueId) {
                    e.taskTitle = action.payload.changeTitle;
                }
                return e;
            })

        }),
        addMinList: ((state, action) => {
           
            const addMinListData = {
                idMin: uuidv4(),
                minTaskTitle: action.payload.minTitle,
                EditStatusOfMin: false,
            }
            state.map((e) => {
                if (e.id === action.payload.idMin) {
                    e.list = [...e.list,addMinListData]

                }
                return e

            })
        }),
        deleteMinList:((state,action)=>{
            state.map((e)=>{
                 if(e.id===action.payload.mainId){
                   const newMinList= e.list.filter((e)=>e.idMin!==action.payload.idToDelete)
                   e.list=[...newMinList];

                 }
                 return e;
            })
        }),
        ToogleMinList:((state,action)=>{
            state.map((e)=>{
                if(e.id===action.payload.mainId){
                  e.list.map((e)=>{
                    if(e.idMin===action.payload.idToToggle){
                        e.EditStatusOfMin=!e.EditStatusOfMin

                    }
                    return e;
                })
                }
                return e;
           })

        }),
        changeMinTitle:((state,action)=>{

            state.map((e)=>{
                if(e.id===action.payload.mainId){
                  e.list.map((e)=>{
                    if(e.idMin===action.payload.idToChnageMinTitle){
                        e.minTaskTitle=action.payload.changeName;

                    }
                    return e;
                })
                }
                return e;
           })
        }),













    }
})