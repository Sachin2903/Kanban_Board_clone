import React, { useState ,useRef} from "react";
import { IoMdAdd } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'
import style from "./subToDoList.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { websiteTodoSlice } from "../../../../slice/websiteTodoSlice";

export function SubToDoList({idForMin}) {
  const addMinRef=useRef();
  const dispatchFromMinList=useDispatch();
  const [showBtn, setShowBtn] = useState(true);

  const handleClick = () => {
    setShowBtn(!showBtn);
  };

  function addMinListFun(){
    if(addMinRef.current.value.trim().length>0){
      dispatchFromMinList(websiteTodoSlice.actions.addMinList({idMin:idForMin,minTitle:(addMinRef.current.value.trim())}))
      
      toast.success('One Added SuccessFully', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    });
      
      
      
      
      addMinRef.current.value=""; 
    }else{


      toast.error(' Add someThing !', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });

    }

  }




  return (
    <>
      {showBtn ? (
        <div className={style.container}>
          <button className={style.buttonDiv} onClick={handleClick}>
            <span className={style.icon}><IoMdAdd /></span> Add a Card
          </button>

        </div>
      ) : (
        <div className={style.btnDiv}>
          <input ref={addMinRef}
            type="text"
            placeholder="Enter a title for this card...."

          />
          <div className={style.inputBtn}>
            <div className={style.btnAdd}>
              <button onClick={addMinListFun} >Add Card</button>
              <span onClick={handleClick}>
                <span className={style.icon1}><RxCross1 /></span>
              </span>
            </div>
        
          </div>
        </div>
      )}
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



    </>
  );
}

