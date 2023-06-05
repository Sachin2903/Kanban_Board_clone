import { Fragment } from "react";
import styles from "./navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";



export default function Navbar(){
    return(
        <Fragment>
            <div className={styles.navbar}>

              <div className={styles.left}>
                  <RxHamburgerMenu className={styles.leftLogo}/>
                  <img className={styles.leftImage} src="https://images.pexels.com/photos/1843716/pexels-photo-1843716.jpeg?auto=compress&cs=tinysrgb&w=600" height="50px" width="50px"  />
                   <h1 className={styles.leftH1}>KANBAN</h1>
              </div>


   
   
              <div className={styles.right}>
                  
                    <p className={styles.rightLi}>Home</p>
                    <p className={styles.rightLi}>Clear Background</p>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" 
                       height="50px" width="50px" className={styles.rightImg}  />
   
              </div>
   
               </div>
        </Fragment>
    )
}