//1
import htmlSass from "../assets/projects/html-sass/html-sass.png";

//2
import pommepatateHome from "../assets/projects/pomme-patate/pomme-patate-home.png";
import pommepatateAchievement from "../assets/projects/pomme-patate/pomme-patate-achievement.png";
import pommepatateAbout from "../assets/projects/pomme-patate/pomme-patate-about.png";

//3
import gsapTop from "../assets/projects/gsap-project/gsap-bot.png";
import gsapBottom from "../assets/projects/gsap-project/gsap-top.png";

//4
import IGKWelcome from "../assets/projects/kitchen/IGK-Welcome.png";
import IGKMenu from "../assets/projects/kitchen/IGK-Menu.png";
import IGKContact from "../assets/projects/kitchen/IGK-Contact.png";
import IGKPictures from "../assets/projects/kitchen/IGK-Pictures.png";
import IGKRestaurant from "../assets/projects/kitchen/IGK-Restaurants.png";

//5
import plantclicker from "../assets/projects/plant/plantclicker.png";
import plantclickerPanel from "../assets/projects/plant/plantclicker-panel.png";

//6
//need to add images

//7
//need to add images

//8
import nightHome from "../assets/projects/night/night-home.png";
import nightProducts from "../assets/projects/night/night-products.png";

//9
import sorahome from "../assets/projects/sora/sora-home.png";
import soralogin from "../assets/projects/sora/sora-login.png";
import soralogged from "../assets/projects/sora/sora-logged.png";
import soramovie from "../assets/projects/sora/sora-movies.png";

//10
import bookface from "../assets/projects/bookface/bookface.png";

//Professionals
//1
import akwanzaHome from "../assets/projects/akwanza/akwanza-home.png";
import akwanzaHomeMobile from "../assets/projects/akwanza/akwanza-home-mobile.png";

//2
import afitpilotHome from "../assets/projects/afitpilot/afitpilot.png";

const content = {
  heading: "Projects",
  learnings: {
    title: "Learnings",
    textOne:
      "I participated in a bootcamp with BeCode. I had already started developing on my own, but I needed more structure and guidance. I found JavaScript difficult to get a handle on. So, I decided to take this course to learn how to work in a team, use Git, manage constraints, and collaborate with back-end developers.",

    textTwo:
      "All these projects may not be visually or technically amazing, but they taught me a lot in their context. I am still happy to share them because it is partly thanks to them that I was able to progress.",
  },
  professionals: {
    title: "Professional",
  },
};

const learnings = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "HTML Sass Portfolio",
    role: "Front-end",
    gallery: [{ id: 1, src: htmlSass, alt: "HTML/Sass Portfolio" }],
    description:
      "A portfolio no responsive to understand the basics of web development, including the use of Sass, webpack, and some simple CSS animations.",
    tech: ["JavaScript", "Sass", "webpack"],
    link: "https://template-html-portfolio.vercel.app/",
    github: "https://github.com/matthieuGravy/template-html-portfolio",
    preview: "/projects/learning/10",
    next: "/projects/learning/2",
  },
  {
    id: "2",
    src: "https://via.placeholder.com/150",
    gallery: [
      { id: 1, src: pommepatateHome, alt: "pommepate homepage" },
      { id: 2, src: pommepatateAchievement, alt: "pommepate achievement" },
      { id: 3, src: pommepatateAbout, alt: "pommepate about" },
    ],
    name: "Pomme Patate",
    role: "Front-end",
    description:
      "A portfolio made with Vue3 to understand the basics of this framework, including the use of slots, props, components, and transitions with Vue Router.",
    tech: ["JavaScript", "bootstrap", "Vue3", "vite"],
    link: "https://pommepatate-v1.vercel.app/about",
    github: "https://github.com/matthieuGravy/pommepatate-v1",
    preview: "/projects/learning/1",
    next: "/projects/learning/3",
  },
  {
    id: "3",
    src: "https://via.placeholder.com/150",
    gallery: [
      { id: 1, src: gsapTop, alt: "gsap top" },
      { id: 2, src: gsapBottom, alt: "gsap bottom" },
    ],
    name: "GSAP Project",
    role: "Front-end",
    description:
      "A portfolio project using Vue3 and GSAP, started after a GSAP training and to understand the basics of this library. I added a multilingual feature to practice Vue Router.",
    tech: ["Vue3", "GSAP", "Sass", "Bootstrap", "vite"],
    link: "https://matthieugravy.github.io/Multilingual-HomePage/",
    github: "https://github.com/matthieuGravy/Multilingual-HomePage",
    preview: "/projects/learning/2",
    next: "/projects/learning/4",
  },
  {
    id: "4",
    src: "https://via.placeholder.com/150",
    name: "ITG Kitchens",
    gallery: [
      { id: 1, src: IGKWelcome, alt: "itg kitchens welcome" },
      { id: 2, src: IGKMenu, alt: "itg kitchens menu" },
      { id: 3, src: IGKContact, alt: "itg kitchens contact" },
      { id: 4, src: IGKPictures, alt: "itg kitchens pictures" },
      { id: 5, src: IGKRestaurant, alt: "itg kitchens restaurant" },
    ],
    role: "Front-end",
    description:
      "HTML/Bootstrap project without using JavaScript frameworks, with a lot of code repetition. This allowed me to work with constraints and improve my HTML and CSS skills.",
    tech: ["JavaScript", "bootstrap", "vite"],
    link: "https://matthieugravy.github.io/restaurant-css-framework/index.html",
    github: "https://github.com/matthieuGravy/restaurant-css-framework",
    preview: "/projects/learning/3",
    next: "/projects/learning/5",
  },
  {
    id: "5",
    src: "https://via.placeholder.com/150",
    gallery: [
      { id: 1, src: plantclicker, alt: "plant clicker" },
      { id: 2, src: plantclickerPanel, alt: "plant clicker panel" },
    ],
    name: "Plant Clicker",
    role: "Front-end",
    description:
      "A clicker game made in a remote group setting to practice using Git. Good communication and organization were essential. A debrief at the end of the project helped evaluate strengths and areas for improvement.",
    tech: ["JavaScript", "CSS", "pixi.js", "vite"],
    link: "https://matthieugravy.github.io/plant-clicker/",
    github: "https://github.com/matthieuGravy/plant-clicker",
    preview: "/projects/learning/4",
    next: "/projects/learning/6",
  },
  {
    id: "6",
    src: "https://via.placeholder.com/150",
    name: "Express Pug",
    role: "Back-end",
    description:
      "Exploration of the backend with Express and Pug to understand template principles, complementing my knowledge of EJS.",
    tech: ["Express", "PUG", "Tailwindcss"],
    github: "https://github.com/matthieuGravy/pug-express",
    preview: "/projects/learning/5",
    next: "/projects/learning/7",
  },
  {
    id: "7",
    src: "https://via.placeholder.com/150",
    name: "Docker Project",
    role: "Back-end",
    description:
      "Introductory project on PHP, Docker, and Nginx. I already had some PHP basics and introduced Docker and Nginx to deepen my skills.",
    tech: ["Php", "Docker", "Nginx"],
    github: "https://github.com/matthieuGravy/my-docker-php",
    preview: "/projects/learning/6",
    next: "/projects/learning/8",
  },
  {
    id: "8",
    src: "https://via.placeholder.com/150",
    gallery: [
      { id: 1, src: nightHome, alt: "night home" },
      { id: 2, src: nightProducts, alt: "night products" },
    ],
    name: "ITG Nights",
    role: "Full-stack",
    description:
      "Solo project to learn the MERN stack (MongoDB, Express, React, Node.js).",
    tech: ["MERN stack", "tailwindcss", "daisy-ui", "vite"],
    github: "https://github.com/matthieuGravy/its-gravy-nights",
    preview: "/projects/learning/7",
    next: "/projects/learning/9",
  },
  {
    id: "9",
    src: "https://via.placeholder.com/150",
    gallery: [
      { id: 1, src: sorahome, alt: "sora home" },
      { id: 2, src: soralogin, alt: "sora login" },
      { id: 3, src: soralogged, alt: "sora logged" },
      { id: 4, src: soramovie, alt: "sora movie" },
    ],
    name: "Sora Cine",
    description:
      "First project with a backend. I collaborated with other developers, which helped me understand how APIs work and how to communicate between front-end and back-end.",
    role: "Front-end",
    tech: ["MERN stack", "tailwindcss"],
    github: "https://github.com/matthieuGravy/sora-cine",
    link: "https://sora-cine.vercel.app/",
    preview: "/projects/learning/8",
    next: "/projects/learning/10",
  },
  {
    id: "10",
    src: "https://via.placeholder.com/150",
    name: "Bookface",
    gallery: [{ id: 1, src: bookface, alt: "bookface" }],
    description:
      "After an unfinished previous project, I decided to create a backend with Express and TypeScript. Although the front-end was not completed by the team, this experience taught me to be more autonomous.",
    role: "Back-end",
    tech: ["MERN stack", "typescript", "tailwindcss", "vite"],
    github: "https://github.com/matthieuGravy/book-face",
    preview: "/projects/learning/9",
    next: "/projects/learning/1",
  },
];

const professionals = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "Akwanza",
    gallery: [
      { id: 1, src: akwanzaHome, alt: "akwanza home" },
      { id: 2, src: akwanzaHomeMobile, alt: "akwanza home mobile" },
    ],
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

export { learnings, professionals, content };
