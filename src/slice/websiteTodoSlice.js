import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const websiteTodoSlice = createSlice({
    initialState: [],
    name: "toDoListData",
    reducers: {
        //reducer to add a main list 
        addToDoList: ((state, action) => {
            const addedTodOListData = {
                id: uuidv4(),
                taskTitle: action.payload,
                list: [],
                trashStatus: false,
            }
            return [...state, addedTodOListData]
        }),
        // delete main list using filter
        DeleteMyToDoList: ((state, action) => {
            return state.filter((e) => {
                if (action.payload === e.id) {
                    return false;
                }
                return true;
            })
        }),

        // toggling trash icon
        toggleTrash: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload) {
                    e.trashStatus = !e.trashStatus;
                }
                return e
            })
        }),

        //title name change 
        TitleChnageOfMainToDoList: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload.uniqueId) {
                    e.taskTitle = action.payload.changeTitle;
                }
                return e;
            })
        }),

        //creating a new sub list
        addMinList: ((state, action) => {
            const addMinListData = {
                idMin: uuidv4(),
                minTaskTitle: action.payload.minTitle,
                EditStatusOfMin: false,  //toggling pencil icon
                activitiesOfList: [`${action.payload.minTitle.toUpperCase()} created on ${Date().slice(0, 25)}`],
                descriptionOfList: []
            }
            state.map((e) => {
                if (e.id === action.payload.idMin) {
                    e.list = [...e.list, addMinListData]
                }
                return e
            })
        }),

        //delete sub list using first find main list then delete sub using filter
        deleteMinList: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload.mainId) {
                    const newMinList = e.list.filter((e) => e.idMin !== action.payload.idToDelete)
                    e.list = [...newMinList];
                }
                return e;
            })
        }),
        //toggling min list pencil box to update it
        ToogleMinList: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload.mainId) {
                    e.list.map((e) => {
                        if (e.idMin === action.payload.idToToggle) {
                            e.EditStatusOfMin = !e.EditStatusOfMin
                        }
                        return e;
                    })
                }
                return e;
            })
        }),

        //change min title
        changeMinTitle: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload.mainId) {
                    e.list.map((e) => {
                        if (e.idMin === action.payload.idToChnageMinTitle) {
                            e.minTaskTitle = action.payload.changeName;
                            e.activitiesOfList = [...e.activitiesOfList, "Card Name changed successfully"]
                        }
                        return e
                    })
                }
                return e;
            })
        }),

        // add discription to min list
        addDescriptionToList: ((state, action) => {
            state.map((e) => {
                if (e.id === action.payload.mainId) {
                    e.list.map((ee) => {
                        if (ee.idMin === action.payload.minId) {
                            const text = `${action.payload.titlefromdes}`
                            ee.descriptionOfList = [text, ...ee.descriptionOfList];
                        }
                        return ee;
                    })
                }
                return e;
            })
        }),

        //    reducers for DND
        chnageInRootAndRoot: ((state, action) => {
            const [removeFromRoot] = state.splice(action.payload.start, 1);
            state.splice(action.payload.end, 0, removeFromRoot)
          return state;
        }),
        // change when in same list first check in which
        changeWhenInSame: ((state, action) => {
            const chnageIn = state.find((e) => {
                if (e.id === action.payload.in)
                    return true;
                return false;
            })
            const [removeInRoot] = chnageIn.list.splice(action.payload.from, 1);
            chnageIn.list.splice(action.payload.to, 0, removeInRoot)
        }),
        
        // change when in diff first take object from both and also add a activity
        changeWhenInDifferent: ((state, action) => {
            const changeInDiff = state.find((e) => {
                if (e.id === action.payload.inRoot)
                    return true;
                return false;
            })
            const [removeInRoot] = changeInDiff.list.splice(action.payload.inRootIndex, 1);
            const changeToDiff = state.find((e) => {
                if (e.id === action.payload.toRoot)
                    return true;
                return false;
            })
            changeToDiff.list.splice(action.payload.toRootIndex, 0, removeInRoot);
            const empty = changeToDiff.list[action.payload.toRootIndex].activitiesOfList;
            changeToDiff.list[action.payload.toRootIndex].activitiesOfList = [`has been moved to ${changeToDiff.taskTitle} on ${Date().slice(0, 25)}`,...empty]
        })
    }
})