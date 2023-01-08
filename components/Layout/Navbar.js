import React from "react";
import Image from "next/image";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["header-inner"]}>
        <div className={`image-container ${styles["header-img"]}`}>
          <Image
            alt="Sachitha Dharshana"
            src="/profile-pic.png"
            layout="fill"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
