import React from "react";

const MyContext = React.createContext({
  projects: [
    {
      id: "1",
      image: "/instagram-clone.PNG",
      title: "Instagram Clone",
      description:
        "A simple Instagram clone prototype created using React, Node.js, Next.js and Bootstrap. Ability to like a post and view number oflikes. View comments and tags. Few sample posts were hardcoded.",
      tech: "HTML5, CSS3, JavaScript, ReactJS, NextJS, Bootstrap",
    },
    {
      id: "2",
      image: "/todo-app.PNG",
      title: "Todo App",
      description:
        "A simple Todo App created using React, TypeScript, and TailwindCSS. Ability to add todos, mark todos as completed, delete todos and view todos.",
      tech: "HTML5, TailwindCSS, JavaScript, ReactJS, TypeScript",
    },
  ],
  skills: [
    {
      id: "1",
      name: "HTML5",
      value: 99,
    },
    {
      id: "2",
      name: "CSS3",
      value: 99,
    },
    {
      id: "3",
      name: "JavaScript",
      value: 95,
    },
    {
      id: "4",
      name: "React JS",
      value: 75,
    },
    {
      id: "5",
      name: "BootStrap",
      value: 99,
    },
    {
      id: "6",
      name: "Figma",
      value: 65,
    },
    {
      id: "7",
      name: "PHP",
      value: 50,
    },
    {
      id: "8",
      name: "Next JS",
      value: 60,
    },
    {
      id: "9",
      name: "JIRA",
      value: 65,
    },
    {
      id: "10",
      name: "GitHub",
      value: 80,
    },
  ],
});

export default MyContext;
