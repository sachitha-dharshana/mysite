import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <a className={styles.btn} href={props.href} {...props}>
      {props.children}
    </a>
  );
};

export default Button;
