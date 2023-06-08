import { Fragment} from "react"
import styles from "./editOpenBox.module.css"
import { HiMenuAlt2 } from "react-icons/hi"
import {ImCross} from "react-icons/im"
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

export function EditOpenBox() {
    const navigate=useNavigate();
    const {param1,param2}=useParams();


  




    function closeTextBox() {
        navigate("/kanbanboard")


    }



    return (
        <Fragment>
            <div className={styles.editMainbox}>
                <div className={styles.editMainboxContainer}>
                    <div className={styles.editMainboxContent}>
                        <ImCross onClick={closeTextBox} className={styles.desBtnCancel}/>
                        <p className={styles.DesTitle}>{param1}</p>
                        <p className={styles.DesTitle}>{param2}</p>
                        <HiMenuAlt2 className={styles.desMenu} />
                        <p className={styles.desText}>Description</p>
                        <AiOutlineQuestionCircle className={styles.desMenu} />
                        <input className={styles.textArea} />


                        <button className={styles.desBtnSave}>Save</button>
                        
                        <p className={styles.desBtnSideText}>Share feedback</p>
                        <div className={styles.bottomDesActivity}>


                        </div>

                    </div>


                </div>

            </div>

        </Fragment>
    )
}


