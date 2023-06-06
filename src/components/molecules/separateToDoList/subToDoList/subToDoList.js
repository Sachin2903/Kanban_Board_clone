import React, { useState } from "react";
import {IoMdAdd} from 'react-icons/io'
import {RxCross1} from 'react-icons/rx'
import style from "./subToDoList.module.css";

export function SubToDoList() {
  const [showBtn, setShowBtn] = useState(true);

  const handleClick = () => {
    setShowBtn(!showBtn);
  };


  return (
    <>
      {showBtn ? (
        <div className={style.container}>
          <button className={style.buttonDiv} onClick={handleClick}>
            <span className={style.icon}><IoMdAdd/></span> Add a Card
          </button>
          
        </div>
      ) : (
        <div className={style.btnDiv}>
          <input
            type="text"
            placeholder="Enter a title for this card...."
            
          />
          <div className={style.inputBtn}>
            <div className={style.btnAdd}>
              <button >Add Card</button>
              <span onClick={handleClick}>
                <span className={style.icon1}><RxCross1/></span>
              </span>
            </div>
            <span className={style.moreIcon}>...</span>
          </div>
        </div>
      )}
    </>
  );
}

