import { createSlice } from "@reduxjs/toolkit";

export const websiteTodoSlice=createSlice({
    initialState:[1,2],
    name:"toDoListData",
    reducers:{
        add:((state,action)=>{
            console.log("heloo");
        })

    }
})