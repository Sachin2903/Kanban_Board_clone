import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const websiteTodoSlice=createSlice({
    initialState:[{},{}],
    name:"toDoListData",
    reducers:{
        addToDoList:((state,action)=>{
             const addedTodOListData={
                id:uuidv4(),
                taskTitle:action.title,
                list:[]
             } 
             
             return [...state,addedTodOListData]
        }),
        addList:((state,action)=>{
                 console.log("asadas");
        })

    }
})