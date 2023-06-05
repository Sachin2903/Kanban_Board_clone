import { Fragment } from "react";
import styles from "./navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../image/logo.png"
import user from "../../../image/man.png"



export  function Navbar(){
    return(
        <Fragment>
            <div className={styles.navbar}>

              <div className={styles.left}>
                  <RxHamburgerMenu className={styles.leftLogo}/>
                  <img className={styles.leftImage} alt="profile" src={logo} height="50px" width="50px"  />
                   <h1 className={styles.leftH1}>KANBAN</h1>
              </div>


   
   
              <div className={styles.right}>
                  
                    <p className={styles.rightLi}>Home</p>
                    <p className={styles.rightLi}>Clear Background</p>
                    <img src={user} 
                       alt="profile" className={styles.rightImg}  />
   
              </div>
   
               </div>
        </Fragment>
    )
}