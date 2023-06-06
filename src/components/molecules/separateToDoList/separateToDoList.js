import { Fragment } from "react";
import {FiMove} from "react-icons/fi";
import {HiDotsCircleHorizontal} from "react-icons/hi"
import styles from "./seperateToDoList.module.css";
import { subToDoList } from "./subToDoList/subToDoList";
export function SeparateToDoList(){
    return(
        <Fragment>
            <div className={styles.TodoList}>

                <input className={styles.ToDolistInput}/>
                <HiDotsCircleHorizontal className={styles.Delete}/>

                <FiMove className={styles.moveArrow}/>

          <subToDoList/>


            </div>

        </Fragment>
    )
}