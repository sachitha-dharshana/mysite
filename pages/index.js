import LazyLoad from "react-lazyload";
import Script from "next/script";

import Head from "next/head";
import Navbar from "../components/Layout/Navbar";
import Content from "../components/Layout/Content";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <LazyLoad>
        <Skills />
      </LazyLoad>
    </>
  );
}
