import { React, useContext } from "react";
import Image from "next/image";

import MyContext from "./store/my-context";
import styles from "./Projects.module.css";
import Card from "./UI/Card";

const Projects = () => {
  const myCtx = useContext(MyContext);

  return (
    <div className={styles.projects}>
      <div className="container">
        <div className="title">
          <h2>Projects</h2>
          <span>Projects</span>
        </div>
        <div className={styles["projects-wrapper"]}>
          {myCtx.projects.map((project) => (
            <Card className="project-card" key={project.id}>
              <div className="image-container c-header">
                <Image
                  alt={project.title}
                  src={project.image}
                  layout="fill"
                  className="image"
                />
                {/* <img alt={project.title} src={project.image} /> */}
              </div>
              <div className={styles["c-body"]}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className={styles["c-footer"]}>
                <div className={styles.badges}>
                  {project.tech.split(",").map((value, index) => (
                    <div key={index} className={styles.badge}>
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
