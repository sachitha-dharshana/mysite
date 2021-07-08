import React from "react";

import MyContext from "./store/my-context";

const myState = {
  projects: [],
  skills: [],
};

const ProjectsProvider = () => {
  const myContext = {
    projects: myState.projects,
    skills: myState.skills,
  };
  return (
    <MyContext.Provider value={myContext}>{props.children}</MyContext.Provider>
  );
};

export default ProjectsProvider;
