import { Fragment, useState } from "react";
import { Navbar } from "../../organisms/navbar/navbar";
import styles from "./heroPage.module.css";
import { InitialTask } from "../../molecules/initialTask/initialTask";

export function HeroPage() {
  const backgrounds = [
    "https://images.pexels.com/photos/2034373/pexels-photo-2034373.jpeg?cs=srgb&dl=pexels-romka-%C2%A0-2034373.jpg&fm=jpg",
    "https://wallpaperaccess.com/full/1391399.png",
    "https://wallpaperaccess.com/full/4183210.jpg",
    "https://wallpaperaccess.com/full/3896261.jpg",
    "https://images.pexels.com/photos/459271/pexels-photo-459271.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://media.istockphoto.com/id/1355464383/photo/abstract-composition-with-connecting-dots-and-lines-blue-background-plexus-effect-big-data-3d.webp?b=1&s=170667a&w=0&k=20&c=tBzuzW1yQ4Oj7XHD10LSZ8oTM21nSIYBo3BLo7c2YGM=",
    "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://wallpaperaccess.com/full/4182676.jpg",
  ];

  const [selectedBackground, setSelectedBackground] = useState(null);

  function onBackgroundClick(i) {
    setSelectedBackground(backgrounds[i]);
  }

  return (
    <Fragment>
      <div
        className={styles.heroPageMain}
        style={{ backgroundImage: `url(${selectedBackground})` }}
      >
        <Navbar backgrounds={backgrounds} onBackgroundClick={onBackgroundClick} />
        <InitialTask />
      </div>
    </Fragment>
  );
}