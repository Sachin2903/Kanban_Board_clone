import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../image/logo.png";
import user from "../../../image/man.png";
import { Link } from "react-router-dom";

export function Navbar({ backgrounds, onBackgroundClick }) {

  const [showBackgroundList, setShowBackgroundList] = useState(false);
  const [selectedBackgroundIndex, setSelectedBackgroundIndex] = useState(0);


  useEffect(() => {
    const storedBackgroundIndex = localStorage.getItem("selectedBackgroundIndex");
    if (storedBackgroundIndex) {
      setSelectedBackgroundIndex(parseInt(storedBackgroundIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedBackgroundIndex", selectedBackgroundIndex.toString());
    onBackgroundClick(selectedBackgroundIndex);
  }, [selectedBackgroundIndex, onBackgroundClick]);

  function handleBackgroundClick(i) {
    setSelectedBackgroundIndex(i);
  }



  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <RxHamburgerMenu className={styles.leftLogo} />
        <img
          className={styles.leftImage}
          alt="profile"
          src={logo}
          height="50px"
          width="50px"
        />
        <h1 className={styles.leftH1}>KANBAN</h1>
      </div>

      <div className={styles.right}>
        <Link to="/" className={styles.link} > <p className={styles.rightLi}>Home</p> </Link>
        <p className={styles.rightLi} onClick={() => setShowBackgroundList(!showBackgroundList)}>
          Change Background
        </p>
        <img src={user} alt="profile" className={styles.rightImg} />
        {showBackgroundList && backgrounds && (
          <ul className={styles.backgroundList}>
            {backgrounds.map((background, i) => (
              <li
                key={i}
                className={styles.backgroundItem}
                onClick={() => handleBackgroundClick(i)}
              >
                <img
                  src={background}
                  alt="Background"
                  className={styles.backgroundImage}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}