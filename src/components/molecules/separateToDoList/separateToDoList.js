import { Fragment } from "react";
import { FiMove } from "react-icons/fi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { TbTrashOff } from "react-icons/tb"
import styles from "./seperateToDoList.module.css";
import { SubToDoList } from "./subToDoList/subToDoList";
export function SeparateToDoList() {



    return (
        <Fragment>
            <div className={styles.TodoList}>

                <input className={styles.ToDolistInput} />

                <div className={styles.deleteBox}>
                    <TbTrashOff className={styles.trashIcon} />
                </div>

                <HiDotsCircleHorizontal className={styles.Delete} />
                <FiMove className={styles.moveArrow} />
                <SubToDoList />
            </div>

        </Fragment>
    )
}