import React,{ Fragment ,useRef} from "react";
import styles from "./editOpenBox.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import {websiteTodoSlice} from "../../../slice/websiteTodoSlice";
import logoimg from "../../../image/man.png";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

export function EditOpenBox() {
    const navigate = useNavigate();
    const refoddes=useRef();
    const inputHintsRefonEdit=useRef();
    const inputToDoTitleonEdit=useRef();
    const refDesHint=useRef();
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
    if(refoddes.current.value.trim().length>0){
        refDesHint.current.style.display="none";
     Des(websiteTodoSlice.actions.addDescriptionToList({mainId:param1,minId:param2,titlefromdes:refoddes.current.value.trim()}));
    refoddes.current.value="";
    toast.success('Please Wait it will update Soon', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    });
    }else{
        refDesHint.current.style.display="block";
    }
  }
    function closeTextBox() {
        navigate("/kanbanboard");
    }

    function checkAndChange(e) {
        inputHintsRefonEdit.current.style.display="block";

        if (e.keyCode === 13) {

            if (inputToDoTitleonEdit.current.value.trim().length > 0) {
                inputHintsRefonEdit.current.style.display="none";

                Des(websiteTodoSlice.actions.changeMinTitle({mainId:param1,idToChnageMinTitle:param2,changeName:(inputToDoTitleonEdit.current.value.trim())}))
               
                inputToDoTitleonEdit.current.value = "";


                toast.success('Successfully Changed', {
                    position: "bottom-center",
                    autoClose: 1000,
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
            <div className={styles.editMainbox}>
                <div className={styles.editMainboxContainer}>
                    <div className={styles.editMainboxContent}>
                        <ImCross onClick={closeTextBox} className={styles.desBtnCancel} />
                        <input className={styles.DesTitle} ref={inputToDoTitleonEdit} onKeyDown={checkAndChange} placeholder={minData.minTaskTitle}/>
                        <p ref={inputHintsRefonEdit} className={styles.inputHintOnEdit}>Press Enter To Change</p>
                        <HiMenuAlt2 className={styles.desMenu} />
                        <p className={styles.desText}>Description</p>
                        <AiOutlineQuestionCircle className={styles.desMenu} />
                        <input ref={refoddes} className={styles.textArea} />
                        <p ref={refDesHint} className={styles.desHintbottom}>Please Add Something</p>

                        <button onClick={toSaveDesInSlice} className={styles.desBtnSave}>Save</button>

                        <p className={styles.desBtnSideText}>Share feedback</p>
                        <div className={styles.bottomDesActivity}>
                            {
                                minData.descriptionOfList.map((e,i)=> <div className={styles.desBox} key={i*10}><img className={styles.desImg} src={logoimg} alt="loading"/><p className={styles.desp}>{e}</p></div>  )
                            }
                        </div>
                        <div className={styles.bottomActivity}>
                            <p className={styles.actTopText}>ALL Activity :-</p>
                            {
                                minData.activitiesOfList.map((e,i)=> <div className={styles.desBox} key={i*10}><img className={styles.desImg} src={logoimg} alt="loading"/><p className={styles.desp}>{e}</p></div>  )
                            }
                        </div>

                    </div>


                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={1000}
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


