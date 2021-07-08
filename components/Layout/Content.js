import React from "react";

import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <div>{props.children}</div>
    </div>
  );
};

export default Content;
