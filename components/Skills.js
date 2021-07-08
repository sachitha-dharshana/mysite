import { React, useContext, useState } from "react";

import MyContext from "./store/my-context";
import styles from "./Skills.module.css";

const Skills = () => {
  const myCtx = useContext(MyContext);

  const [render, setRender] = useState(false);

  setTimeout(() => {
    setRender(true); //After 1 second, set render to true
  }, 1000);

  return (
    <div className={styles.skills}>
      <div className="container">
        <div className="title">
          <h2>My Skills</h2>
          <span>My Skills</span>
        </div>
        <div className={`row ${styles["skills-wrapper"]}`}>
          {myCtx.skills.map((skill) => (
            <div
              key={skill.id}
              className={`col-lg-6 ${styles["skill-wrapper"]}`}
            >
              <h5>
                <b>{skill.name}</b>
              </h5>
              <div className={styles.progress}>
                <div className={styles["progress-value"]}>{skill.value}%</div>
                <div className={styles["progress-bar"]}>
                  {!render ? (
                    <span
                      className={styles["progress-active"]}
                      style={{ width: 0 }}
                    ></span>
                  ) : (
                    <span
                      className={styles["progress-active"]}
                      style={{ width: `${skill.value}%` }}
                    ></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
