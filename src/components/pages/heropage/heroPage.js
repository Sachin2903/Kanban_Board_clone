import { Fragment } from "react";
import { Navbar } from "../../organisms/navbar/navbar";
import styles from "./heroPage.module.css";
import { InitialTask } from "../../molecules/initialTask/initialTask";
import { EditOpenBox } from "../../molecules/editTextBox/editTextBox";
export function HeroPage(){

    

    return (
        <Fragment>
            <div className={styles.heroPageMain}  >
                <Navbar/>

                

                <div className={styles.bottomBox}>
                <InitialTask/>

                </div>

            

             <EditOpenBox/>











            </div>

            
        </Fragment>
    )
}