import { Fragment, useRef } from "react";
import { FiMove } from "react-icons/fi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { TbTrashOff } from "react-icons/tb"
import styles from "./seperateToDoList.module.css";
import { SubToDoList } from "./subToDoList/subToDoList";
import { useDispatch, useSelector } from "react-redux";
import { websiteTodoSlice } from "../../../slice/websiteTodoSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllList } from "../AllList/allList"


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
    function changeTrashStatus(idForTrash) {
        dispatchToDo(websiteTodoSlice.actions.toggleTrash(idForTrash))

    }

    function DeleteCompleteToDoList(idForAction) {
        dispatchToDo(websiteTodoSlice.actions.DeleteMyToDoList(idForAction))
    }
    function checkAndChange(e) {

        if (e.keyCode === 13) {

            if (inputToDoTitle.current.value.length > 0) {
                dispatchToDo(websiteTodoSlice.actions.TitleChnageOfMainToDoList({
                    uniqueId: idOfComp,
                    changeTitle: inputToDoTitle.current.value.trim()
                }))
                inputToDoTitle.current.value = "";


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

            }
        }

    }



    return (
        <Fragment>
            <div className={styles.TodoList}>

                <input ref={inputToDoTitle} onKeyDown={checkAndChange} placeholder={titleForPlaceHolder} className={styles.ToDolistInput} />
                {
                    (dustbinStatus) ? (

                        <div className={styles.deleteBox}>
                            <TbTrashOff onClick={() => DeleteCompleteToDoList(idOfComp)} className={styles.trashIcon} />
                        </div>

                    ) : <div></div>

                }


                {

                    arrayToBeMapInsideSeprateList.map((e) =><AllList toggleStatusOfMin={e.EditStatusOfMin} minTitle={e.minTaskTitle} idForMinCross={e.idMin} idForMain={idOfComp} key={e.idMin}/>)



                }











                <HiDotsCircleHorizontal onClick={() => changeTrashStatus(idOfComp)} className={styles.Delete} />
                <FiMove className={styles.moveArrow} />
                <SubToDoList idForMin={idOfComp} idForMain={idOfComp}/>

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




            </div>

        </Fragment>
    )
}