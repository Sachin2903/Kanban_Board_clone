import { Fragment ,useRef} from "react";
import styles from "./editOpenBox.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import {websiteTodoSlice} from "../../../slice/websiteTodoSlice";
import logoimg from "../../../image/man.png"

export function EditOpenBox() {
    const navigate = useNavigate();
    const refoddes=useRef();
    const { param1, param2 } = useParams();
    const Des = useDispatch();



    const stateForDes = useSelector((state, action) => {
        const mainData = state.toDoListData.find((e) => {
            if(e.id===param1)
               return true;
               return false;
        })
           return mainData;          
    })

  const minData=stateForDes.list.find((e)=>{
    if(e.idMin===param2)
    return true;
    return false;
  })

  function toSaveDesInSlice(){
    Des(websiteTodoSlice.actions.addDescriptionToList({mainId:param1,minId:param2,titlefromdes:refoddes.current.value.trim()}));
    refoddes.current.value=""
  }

 


    function closeTextBox() {
        navigate("/kanbanboard")
    }



    return (
        <Fragment>
            <div className={styles.editMainbox}>
                <div className={styles.editMainboxContainer}>
                    <div className={styles.editMainboxContent}>
                        <ImCross onClick={closeTextBox} className={styles.desBtnCancel} />
                        <p className={styles.DesTitle}>{minData.minTaskTitle}</p>
                        <HiMenuAlt2 className={styles.desMenu} />
                        <p className={styles.desText}>Description</p>
                        <AiOutlineQuestionCircle className={styles.desMenu} />
                        <input ref={refoddes} className={styles.textArea} />

                        <button onClick={toSaveDesInSlice} className={styles.desBtnSave}>Save</button>

                        <p className={styles.desBtnSideText}>Share feedback</p>
                        <div className={styles.bottomDesActivity}>
                            {
                                minData.descriptionOfList.map((e,i)=> <div className={styles.desBox} key={i*10}><img className={styles.desImg} src={logoimg} alt="loading"/><p className={styles.desp}>{e}</p></div>  )
                            }


                        </div>

                    </div>


                </div>

            </div>

        </Fragment>
    )
}


