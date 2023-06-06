import { configureStore } from "@reduxjs/toolkit";

import {websiteTodoSlice} from "../slice/websiteTodoSlice"
export const store=configureStore({
    reducer:{
        "toDoListData":websiteTodoSlice.reducer,

    }
})