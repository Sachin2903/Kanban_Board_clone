import { Fragment } from "react";
import styles from "./mainPage.module.css";
import logo from "../../../image/logo.png";
import { BiBookAdd } from "react-icons/bi";
import { RiYoutubeLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import {BiDollar } from "react-icons/bi";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { BsImage } from "react-icons/bs";
import {Link} from "react-router-dom"






export function MainPage() {
    return (
        <Fragment>
            <div className={styles.mainPageDiv}>


            <div className={styles.NavBar}>

                <div className={styles.LeftNavbar}>
                   <img className={styles.leftImage} alt="profile" src={logo}  />
                   <h1 className={styles.leftH1}>KANBAN.COM</h1>
                </div>

                <div className={styles.RightNavbar}>
                       <ul className={styles.RightNavbarUl}>
                         <li className={styles.RightNavbarLi}>FEATURES<BiBookAdd /></li>
                         <li className={styles.RightNavbarLi}>TUTORIAL<RiYoutubeLine /></li>
                         <li className={styles.RightNavbarLi}>FOR TEAM<RiTeamLine /></li>
                         <li className={styles.RightNavbarLi}>FOR STUDENTS<BsPerson /></li>
                         <li className={styles.RightNavbarLi}>BACKGROUND<BsImage /></li>
                         <li className={styles.RightNavbarLi}>PRICING<BiDollar /></li>
                       </ul> 

                       <Link to="/kanbanboard">
                       <p className={styles.RightNavbarP}>START FOR FREE<TbCurrencyDollarOff /></p>
                       </Link>
                </div>
                
                </div>


                <div className={styles.mainPageContent}>
                    <h1 className={styles.head}>Kanban brings all your<br/> tasks, teammates, and <br/> tools together</h1>
                   <br/>
                    <p className={styles.para}>Keep everything in the same place — even if your<br/> team isn’t.</p>
                </div>



            </div>



        </Fragment>
    )
}