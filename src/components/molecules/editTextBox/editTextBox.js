import { Fragment, useRef } from "react"
import styles from "./editOpenBox.module.css"
import { HiMenuAlt2 } from "react-icons/hi"
import { AiOutlineQuestionCircle } from "react-icons/ai"

export function EditOpenBox() {




    function closeTextBox() {


    }



    return (
        <Fragment>
            <div className={styles.editMainbox}>
                <div className={styles.editMainboxContainer}>
                    <div className={styles.editMainboxContent}>
                        <p className={styles.DesTitle}>jjjjjjj</p>
                        <HiMenuAlt2 className={styles.desMenu} />
                        <p className={styles.desText}>Description</p>
                        <AiOutlineQuestionCircle className={styles.desMenu} />
                        <input className={styles.textArea} />


                        <button className={styles.desBtnSave}>Save</button>
                        <button onClick={closeTextBox} className={styles.desBtnCancel}>Cancel</button>
                        <p className={styles.desBtnSideText}>Share feedback</p>
                        <div className={styles.bottomDesActivity}>


                        </div>

                    </div>


                </div>

            </div>

        </Fragment>
    )
}


