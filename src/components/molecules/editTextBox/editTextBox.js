import { Fragment ,useRef} from "react"
import styles from "./editOpenBox.module.css"
import { HiMenuAlt2 } from "react-icons/hi"
import { AiOutlineQuestionCircle } from "react-icons/ai"

export function EditOpenBox() {
    const textBoxDiv=useRef();
   


 function closeTextBox(){
    textBoxDiv.current.style.display="none";

 }



    return (
        <Fragment>
            <div ref={textBoxDiv} className={styles.editMainbox}>
                <div className={styles.editMainboxContainer}>
                    <div className={styles.editMainboxContent}>
                        <HiMenuAlt2 className={styles.desMenu} />
                        <p className={styles.desText}>Description</p>
                        <AiOutlineQuestionCircle className={styles.desMenu} />
                        <div className={styles.textArea}>

                        </div>
                        <button className={styles.desBtnSave}>Save</button>
                        <button onClick={closeTextBox} className={styles.desBtnCancel}>Cancel</button>
                        <p className={styles.desBtnSideText}>Share feedback</p>

                    </div>


                </div>

            </div>

        </Fragment>
    )
}


