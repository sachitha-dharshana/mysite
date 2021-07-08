import React from "react";
import Button from "../components/UI/Button";
import Image from "next/image";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="title">
          <h2>About Me</h2>
          <span>About Me</span>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className={`image-container ${styles["about-image"]}`}>
              <Image
                alt="About image"
                src="/about-image.jpg"
                layout="fill"
                className="image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles["about-content"]}>
              <h3>
                I am <span className="primary">Sachitha Dharshana</span>
              </h3>
              <p>
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. I also make website more & more
                interactive with web animations.
              </p>
              <ul>
                <li>
                  <b>Full Name: </b> Sachitha Dharshana Kahakachchi
                </li>
                <li>
                  <b>DOB: </b> 1996 February 21
                </li>
                <li>
                  <b>Nationality: </b> Sinhalese
                </li>
                <li>
                  <b>Religion: </b> Buddhist
                </li>
                <li>
                  <b>Languages: </b> English, Sinhala
                </li>
                <li>
                  <b>Address: </b> No. 21, Anura Mawatha, Borupana Road,
                  Ratmalana.
                </li>
              </ul>

              <Button href="/sachitha-cv.pdf" download target="_blank">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
