import css from "../../assets/css.svg";
import sass from "../../assets/sass.svg";
import html from "../../assets/html.svg";
import bootstrap from "../../assets/bootstrap.svg";
import git from "../../assets/git.svg";
import javascript from "../../assets/javascript.svg";
import mongo from "../../assets/mongodb.svg";
import nodejs from "../../assets/nodejs.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import typescript from "../../assets/typescript.svg";
import vscode from "../../assets/vscode.svg";
import vue from "../../assets/vue.svg";

const classnameP = `text-center uppercase text-xs py-4 cursor-default`;
const classnameImg = "w-20";

const Html = () => {
  return (
    <>
      <img src={html} alt="html" className={classnameImg} />
      <p className={classnameP}>HTML</p>
    </>
  );
};

const Sass = () => {
  return (
    <>
      <img src={sass} alt="Sass" className={classnameImg} />
      <p className={classnameP}>sass</p>
    </>
  );
};

const Css = () => {
  return (
    <>
      <img src={css} alt="css" className={classnameImg} />
      <p className={classnameP}>css</p>
    </>
  );
};

const Bootstrap = () => {
  return (
    <>
      <img src={bootstrap} alt="Bootstrap" className={classnameImg} />
      <p className={classnameP}>Bootstrap</p>
    </>
  );
};

const Git = () => {
  return (
    <>
      <img src={git} alt="git" className={classnameImg} />
      <p className={classnameP}>git</p>
    </>
  );
};
const Javascript = () => {
  return (
    <>
      <img src={javascript} alt="Javascript" className={classnameImg} />
      <p className={classnameP}>javascript</p>
    </>
  );
};
const Mongo = () => {
  return (
    <>
      <img src={mongo} alt="mongodb" className={classnameImg} />
      <p className={classnameP}>mongodb</p>
    </>
  );
};
const Nodejs = () => {
  return (
    <>
      <img src={nodejs} alt="nodejs" className={classnameImg} />
      <p className={classnameP}>Node.js</p>
    </>
  );
};

const Reactjs = () => {
  return (
    <>
      <img src={react} alt="react" className={classnameImg} />
      <p className={classnameP}>React</p>
    </>
  );
};

const Tailwind = () => {
  return (
    <>
      <img src={tailwind} alt="tailwind" className={classnameImg} />
      <p className={classnameP}>tailwind</p>
    </>
  );
};

const Typescript = () => {
  return (
    <>
      <img src={typescript} alt="typescript" className={classnameImg} />
      <p className={classnameP}>typescript</p>
    </>
  );
};

const Vscode = () => {
  return (
    <>
      <img src={vscode} alt="vscode" className={classnameImg} />
      <p className={classnameP}>vs code</p>
    </>
  );
};
const Vue = () => {
  return (
    <>
      <img src={vue} alt="vue" className={classnameImg} />
      <p className={classnameP}>vue</p>
    </>
  );
};

export {
  Css,
  Sass,
  Html,
  Bootstrap,
  Git,
  Javascript,
  Mongo,
  Nodejs,
  Reactjs,
  Tailwind,
  Typescript,
  Vscode,
  Vue,
};
