import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["header-inner"]}>
        <div className={styles["header-img"]}>
          <img alt="Sachitha Dharshana" src="/passport.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
