
import { useRef } from "react";
import { FiMove } from "react-icons/fi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { TbTrashOff } from "react-icons/tb"
import styles from "./seperateToDoList.module.css";
import { SubToDoList } from "./subToDoList/subToDoList";
import { useDispatch, useSelector } from "react-redux";
import { websiteTodoSlice } from "../../../slice/websiteTodoSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllList } from "../AllList/allList";
import { Draggable, Droppable } from "react-beautiful-dnd";


export function SeparateToDoList({ titleForPlaceHolder, idOfComp, dustbinStatus }) {
    const arrayToBeMapInsideSeprateList = useSelector((state, action) => {
        const a = state.toDoListData.find((e) => {
            if (e.id === idOfComp) {
                return true
            }
            return false;
        })
        return a.list;
    });


    const dispatchToDo = useDispatch();
    const inputToDoTitle = useRef("");
    const inputHintsRef = useRef();
    function changeTrashStatus(idForTrash) {
        dispatchToDo(websiteTodoSlice.actions.toggleTrash(idForTrash))

    }

    function DeleteCompleteToDoList(idForAction) {
        dispatchToDo(websiteTodoSlice.actions.DeleteMyToDoList(idForAction))
    }
    function checkAndChange(e) {
        inputHintsRef.current.style.display = "block";

        if (e.keyCode === 13) {

            if (inputToDoTitle.current.value.trim().length > 0) {
                inputHintsRef.current.style.display = "none";
                dispatchToDo(websiteTodoSlice.actions.TitleChnageOfMainToDoList({
                    uniqueId: idOfComp,
                    changeTitle: inputToDoTitle.current.value.trim()
                }))
                inputToDoTitle.current.value = "";


                toast.success('Successfully Changed', {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });

            }
        }

    }



    return (

        <Droppable droppableId={idOfComp}>
            {(provided) => (
                <div className={styles.TodoList} {...provided.droppableProps} ref={provided.innerRef}>

                    <input ref={inputToDoTitle} onKeyDown={checkAndChange} placeholder={titleForPlaceHolder} className={styles.ToDolistInput} />
                    <p ref={inputHintsRef} className={styles.inputHint}>Press Enter To Change</p>
                    {
                        (dustbinStatus) ? (

                            <div className={styles.deleteBox}>
                                <TbTrashOff onClick={() => DeleteCompleteToDoList(idOfComp)} className={styles.trashIcon} />
                            </div>

                        ) : <div></div>

                    }

                    {

                        arrayToBeMapInsideSeprateList.map((e, i) =>
                            <Draggable draggableId={e.idMin} index={i} key={e.idMin}>
                                {(provided) => (
                                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                        <AllList toggleStatusOfMin={e.EditStatusOfMin} minTitle={e.minTaskTitle} idForMinCross={e.idMin} idForMain={idOfComp} key={e.idMin} />

                                    </div>
                                )}
                            </Draggable>
                        )
                    }
                    {provided.placeholder}
                    <HiDotsCircleHorizontal onClick={() => changeTrashStatus(idOfComp)} className={styles.Delete} />
                    <FiMove className={styles.moveArrow} />
                    <SubToDoList idForMin={idOfComp} idForMain={idOfComp} />
                    <ToastContainer
                        position="bottom-center"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </div>
            )}
        </Droppable>


    )
}