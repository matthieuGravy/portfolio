//1 portfolio
import HtmlPortfolio from "../assets/projects/mockup/html-portfolio.png";

//2 portfolio
import vuePortfolio from "../assets/projects/mockup/vue3-portfolio.png";

//3 portfolio
import gsapPortfolio from "../assets/projects/mockup/gsap-portfolio.png";

//1 IGK
import Igk from "../assets/projects/mockup/itgkitchen.png";

//5
import plantclicker from "../assets/projects/mockup/plantclicker.png";

//6
import pug from "../assets/projects/mockup/pugjs.png";

//7
import php from "../assets/projects/mockup/php.png";

//8
import nightHome from "../assets/projects/mockup/itg-nights.png";

//9
import sorahome from "../assets/projects/mockup/Soracine.png";

//10
import bookface from "../assets/projects/mockup/bookface.png";

//Professionals
//1
import akwanzaHome from "../assets/projects/mockup/akwanza.png";

//2
import afitpilotHome from "../assets/projects/mockup/afitpilot.png";

const content = {
  heading: "Projects",
  learnings: {
    title: "Learnings",
    textOne:
      "Bienvenue sur ma page de projets ! Ici, vous trouverez une sélection de mes travaux, incluant des templates de portfolio, des projets d'apprentissage et des projets professionnels.",
  },
  professionals: {
    title: "Professional",
  },
  shared: {
    title: "Shared",
  },
};

const shared = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "Html portfolio",
    role: "Front-end",
    gallery: [{ id: 1, src: HtmlPortfolio, alt: "HTML/Sass Portfolio" }],
    description:
      "A portfolio no responsive to understand the basics of web development, including the use of Sass, webpack, and some simple CSS animations.",
    tech: ["JavaScript", "Sass", "webpack"],
    link: "https://template-html-portfolio.vercel.app/",
    github: "https://github.com/matthieuGravy/template-html-portfolio",
    preview: "/projects/shared/3",
    next: "/projects/shared/2",
  },
  {
    id: "2",
    src: "https://via.placeholder.com/150",
    gallery: [{ id: 1, src: vuePortfolio, alt: "pommepate homepage" }],
    name: "Vue Portfolio",
    role: "Front-end",
    description:
      "A portfolio made with Vue3 to understand the basics of this framework, including the use of slots, props, components, and transitions with Vue Router.",
    tech: ["JavaScript", "bootstrap", "Vue3", "vite"],
    link: "https://pommepatate-v1.vercel.app",
    github: "https://github.com/matthieuGravy/pommepatate-v1",
    preview: "/projects/shared/1",
    next: "/projects/shared/3",
  },
  {
    id: "3",
    src: "https://via.placeholder.com/150",
    gallery: [{ id: 1, src: gsapPortfolio, alt: "gsap top" }],
    name: "GSAP Portfolio",
    role: "Front-end",
    description:
      "A portfolio project using Vue3 and GSAP, started after a GSAP training and to understand the basics of this library. I added a multilingual feature to practice Vue Router.",
    tech: ["Vue3", "GSAP", "Sass", "Bootstrap", "vite"],
    link: "https://matthieugravy.github.io/Multilingual-HomePage/",
    github: "https://github.com/matthieuGravy/Multilingual-HomePage",
    preview: "/projects/shared/2",
    next: "/projects/shared/1",
  },
];
const learnings = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "ITG Kitchens",
    gallery: [{ id: 1, src: Igk, alt: "itg kitchens welcome" }],
    role: "Front-end",
    description:
      "HTML/Bootstrap project without using JavaScript frameworks, with a lot of code repetition. This allowed me to work with constraints and improve my HTML and CSS skills.",
    tech: ["JavaScript", "bootstrap", "vite"],
    link: "https://matthieugravy.github.io/restaurant-css-framework/index.html",
    github: "https://github.com/matthieuGravy/restaurant-css-framework",
    preview: "/projects/learning/7",
    next: "/projects/learning/2",
  },
  {
    id: "2",
    src: "https://via.placeholder.com/150",
    gallery: [{ id: 1, src: plantclicker, alt: "plant clicker" }],
    name: "Plant Clicker",
    role: "Front-end",
    description:
      "A clicker game made in a remote group setting to practice using Git. Good communication and organization were essential. A debrief at the end of the project helped evaluate strengths and areas for improvement.",
    tech: ["JavaScript", "CSS", "pixi.js", "vite"],
    link: "https://matthieugravy.github.io/plant-clicker/",
    github: "https://github.com/matthieuGravy/plant-clicker",
    preview: "/projects/learning/1",
    next: "/projects/learning/3",
  },
  {
    id: "3",
    src: "https://via.placeholder.com/150",
    name: "Express Pug",
    gallery: [{ id: 1, src: pug, alt: "pug/express" }],
    role: "Back-end",
    description:
      "Exploration of the backend with Express and Pug to understand template principles, complementing my knowledge of EJS.",
    tech: ["Express", "PUG", "Tailwindcss"],
    github: "https://github.com/matthieuGravy/pug-express",
    preview: "/projects/learning/2",
    next: "/projects/learning/4",
  },
  {
    id: "4",
    src: "https://via.placeholder.com/150",
    name: "Docker Project",
    gallery: [{ id: 1, src: php, alt: "php/docker" }],
    role: "Back-end",
    description:
      "Introductory project on PHP, Docker, and Nginx. I already had some PHP basics and introduced Docker and Nginx to deepen my skills.",
    tech: ["Php", "Docker", "Nginx"],
    github: "https://github.com/matthieuGravy/my-docker-php",
    preview: "/projects/learning/3",
    next: "/projects/learning/5",
  },
  {
    id: "5",
    src: "https://via.placeholder.com/150",
    gallery: [{ id: 1, src: nightHome, alt: "night home" }],
    name: "ITG Nights",
    role: "Full-stack",
    description:
      "Solo project to learn the MERN stack (MongoDB, Express, React, Node.js).",
    tech: ["MERN stack", "tailwindcss", "daisy-ui", "vite"],
    github: "https://github.com/matthieuGravy/its-gravy-nights",
    preview: "/projects/learning/4",
    next: "/projects/learning/6",
  },
  {
    id: "6",
    src: "https://via.placeholder.com/150",
    gallery: [{ id: 1, src: sorahome, alt: "sora home" }],
    name: "Sora Cine",
    description:
      "First project with a backend. I collaborated with other developers, which helped me understand how APIs work and how to communicate between front-end and back-end.",
    role: "Front-end",
    tech: ["MERN stack", "tailwindcss"],
    github: "https://github.com/matthieuGravy/sora-cine",
    link: "https://sora-cine.vercel.app/",
    preview: "/projects/learning/5",
    next: "/projects/learning/7",
  },
  {
    id: "7",
    src: "https://via.placeholder.com/150",
    name: "Bookface",
    gallery: [{ id: 1, src: bookface, alt: "bookface" }],
    description:
      "After an unfinished previous project, I decided to create a backend with Express and TypeScript. Although the front-end was not completed by the team, this experience taught me to be more autonomous.",
    role: "Back-end",
    tech: ["MERN stack", "typescript", "tailwindcss", "vite"],
    github: "https://github.com/matthieuGravy/book-face",
    preview: "/projects/learning/6",
    next: "/projects/learning/1",
  },
];

const professionals = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "Akwanza",
    gallery: [{ id: 1, src: akwanzaHome, alt: "akwanza home" }],
    description:
      "For my first professional team project, I was responsible for the front-end. I participated in designing the front-end with Figma and created product designs for the shop.",
    role: "Front-end, Design",
    tech: ["MERN stack", "Framer", "tailwindcss", "vite"],
    link: "https://www.akwanza.com/",
    preview: "/projects/professional/2",
    next: "/projects/professional/2",
  },
  {
    id: "2",
    src: "https://via.placeholder.com/150",
    name: "Afitpilot",
    gallery: [{ id: 1, src: afitpilotHome, alt: "afitpilot home" }],
    description:
      "For my second professional team project, I was responsible for debugging the sign-up system and researching a new architecture suitable for a micro-environment.",
    role: "Back-end, DevOps",
    tech: ["MERN stack", "TypeScript", "MUI"],
    to: "afitpilot",
    link: "https://www.afitpilot.com/",
    preview: "/projects/professional/1",
    next: "/projects/professional/1",
  },
];

export { shared, learnings, professionals, content };
