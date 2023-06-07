import { Fragment } from "react";
import { Navbar } from "../../organisms/navbar/navbar";
import styles from "./heroPage.module.css";
import { InitialTask } from "../../molecules/initialTask/initialTask";

export function HeroPage(){

    

    return (
        <Fragment>
            <div className={styles.heroPageMain}  >
                <Navbar/>

                

               
                <InitialTask/>

              

            

          











            </div>

            
        </Fragment>
    )
}