import IGKWelcome from "../assets/projects/kitchen/IGK-Welcome.png";
import IGKMenu from "../assets/projects/kitchen/IGK-Menu.png";
import IGKContact from "../assets/projects/kitchen/IGK-Contact.png";
import IGKPictures from "../assets/projects/kitchen/IGK-Pictures.png";
import IGKRestaurant from "../assets/projects/kitchen/IGK-Restaurants.png";

//5
import plantclicker from "../assets/projects/plant/plantclicker.png";
import plantclickerPanel from "../assets/projects/plant/plantclicker-panel.png";

//6

//9
import sorahome from "../assets/projects/sora/sora-home.png";
import soralogin from "../assets/projects/sora/sora-login.png";
import soralogged from "../assets/projects/sora/sora-logged.png";
import soramovie from "../assets/projects/sora/sora-movies.png";

//10
import bookface from "../assets/projects/bookface/bookface.png";

const projects = [
  {
    id: "1",
    src: "https://via.placeholder.com/150",
    name: "HTML/Sass Portfolio",
    role: "Front-end",
    description:
      "A portfolio no responsive to understand the basics of web development, including the use of Sass, webpack, and some simple CSS animations.",
    tech: ["JavaScript", "Sass", "webpack"],
    link: "https://template-html-portfolio.vercel.app/",
    github: "https://github.com/matthieuGravy/template-html-portfolio",
    button: "html-portfolio",
    preview: "bookface",
    next: "pomme-patate",
  },
  {
    id: "2",
    src: "https://via.placeholder.com/150",
    name: "Pomme Patate",
    role: "Front-end",
    description:
      "A portfolio made with Vue3 to understand the basics of this framework, including the use of slots, props, components, and transitions with Vue Router.",
    tech: ["JavaScript", "bootstrap", "Vue3", "vite"],
    link: "https://pommepatate-v1.vercel.app/about",
    github: "https://github.com/matthieuGravy/pommepatate-v1",
    to: "pomme-patate",
    preview: "html-portfolio",
    next: "gsap-project",
  },
  {
    id: "3",
    src: "https://via.placeholder.com/150",
    name: "GSAP Project",
    role: "Front-end",
    description:
      "A portfolio project using Vue3 and GSAP, started after a GSAP training before joining BeCode.",
    tech: ["Vue3", "GSAP", "Sass", "Bootstrap", "vite"],
    link: "https://matthieugravy.github.io/Multilingual-HomePage/",
    github: "https://github.com/matthieuGravy/Multilingual-HomePage",
    to: "gsap-project",
    preview: "pomme-patate",
    next: "itg-kitchens",
  },
  {
    id: "4",
    src: "https://via.placeholder.com/150",
    name: "ITG Kitchens",
    gallery: [IGKWelcome, IGKMenu, IGKContact, IGKPictures, IGKRestaurant],
    role: "Front-end",
    description:
      "HTML/Bootstrap project without using JavaScript or frameworks, with a lot of code repetition. This allowed me to work with constraints and improve my HTML and CSS skills.",
    tech: ["JavaScript", "bootstrap"],
    link: "https://matthieugravy.github.io/restaurant-css-framework/index.html",
    github: "https://github.com/matthieuGravy/restaurant-css-framework",
    to: "itg-kitchens",
    preview: "gsap-project",
    next: "plant-clicker",
  },
  {
    id: "5",
    src: "https://via.placeholder.com/150",
    gallery: [plantclicker, plantclickerPanel],
    name: "Plant Clicker",
    role: "Front-end",
    description:
      "A clicker game made in a remote group setting to practice using Git. Good communication and organization were essential. A debrief at the end of the project helped evaluate strengths and areas for improvement.",
    tech: ["JavaScript", "CSS", "pixi.js"],
    link: "https://matthieugravy.github.io/plant-clicker/",
    github: "https://github.com/matthieuGravy/plant-clicker",
    to: "plant-clicker",
    preview: "itg-kitchens",
    next: "express-pug",
  },
  {
    id: "6",
    src: "https://via.placeholder.com/150",
    name: "Express Pug",
    role: "Front-end",
    description:
      "Exploration of the backend with Express and Pug to understand template principles, complementing my knowledge of EJS.",
    tech: ["Express", "PUG", "Tailwindcss"],
    github: "https://github.com/matthieuGravy/pug-express",
    to: "express-pug",
    preview: "plant-clicker",
    next: "docker-project",
  },
  {
    id: "7",
    src: "https://via.placeholder.com/150",
    name: "Docker Project",
    role: "Back-end",
    description:
      "Introductory project on PHP, Docker, and Nginx. I already had some PHP basics and introduced Docker and Nginx to deepen my skills.",
    tech: ["Php", "Docker", "nginx"],
    github: "https://github.com/matthieuGravy/my-docker-php",
    to: "docker-project",
    preview: "express-pug",
    next: "itg-nights",
  },
  {
    id: "8",
    src: "https://via.placeholder.com/150",
    name: "ITG Nights",
    role: "Front-end",
    description:
      "Solo project to learn the MERN stack (MongoDB, Express, React, Node.js).",
    tech: ["MERN stack", "tailwindcss", "daisy-ui", "vite"],
    github: "https://github.com/matthieuGravy/its-gravy-nights",
    to: "itg-nights",
    preview: "docker-project",
    next: "sora-cine",
  },
  {
    id: "9",
    src: "https://via.placeholder.com/150",
    gallery: [sorahome, soralogin, soralogged, soramovie],
    name: "Sora Cine",
    description:
      "First project with a backend. I collaborated with other developers, which helped me understand how APIs work and how to communicate between front-end and back-end.",
    role: "Front-end",
    tech: ["MERN stack", "tailwindcss"],
    github: "https://github.com/matthieuGravy/sora-cine",
    link: "https://sora-cine.vercel.app/",
    to: "sora-cine",
    preview: "itg-nights",
    next: "bookface",
  },
  {
    id: "10",
    src: "https://via.placeholder.com/150",
    name: "BookFace",
    gallery: [bookface],
    description:
      "After an unfinished previous project, I decided to create a backend with Express and TypeScript. Although the front-end was not completed by the team, this experience taught me to be more autonomous.",
    role: "Back-end",
    tech: ["MERN stack", "typescript", "tailwindcss", "vite"],
    github: "https://github.com/matthieuGravy/book-face",
    to: "bookface",
    preview: "sora-cine",
    next: "html-portfolio",
  },
];

export default projects;
