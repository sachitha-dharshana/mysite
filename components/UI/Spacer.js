import React from "react";

import styles from "./Spacer.module.css";

const Spacer = (props) => {
  return (
    <span style={{ height: props.height }} className={styles.spacer}></span>
  );
};

export default Spacer;
