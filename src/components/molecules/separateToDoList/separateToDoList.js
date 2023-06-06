import { Fragment } from "react";
import styles from "./seperateToDoList.module.css";
import { subToDoList } from "./subToDoList/subToDoList";
export function SeparateToDoList(){
    return(
        <Fragment>
            <div className={styles.TodoList}>

          <subToDoList/>


            </div>

        </Fragment>
    )
}