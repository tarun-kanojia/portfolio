import ReactLogo from "./logo.svg";
import {
  SiTypescript,
  SiReact,
  SiMobx,
  SiJavascript,
} from "react-icons/si";

export const SKILLS = [
  {
    name: "React.js",
    description:
      "React is a popular JavaScript library for building user interfaces. It uses a declarative approach to rendering components based on changes in the application state.",
    logo: SiReact,
  },
  {
    name: "javascript",
    description:
      "JavaScript is a high-level programming language that is used to create dynamic, interactive web pages and web applications. It is one of the core technologies of the World Wide Web and is widely used in both client-side and server-side development.",
    logo: SiJavascript,
  },
  {
    name: "typescript",
    description:
      "TypeScript is a superset of JavaScript that adds static typing and other features to make it easier to write and maintain large-scale applications. It helps catch errors before you run your code and provides better code completion and documentation.",
    logo: SiTypescript,
  },

  {
    name: "mobx",
    description:
      "MobX is a state management library for JavaScript applications. It allows you to easily manage and synchronize the state of your application across multiple components and data sources.",
    logo: SiMobx,
  },
];
