import { PorjectCard } from "../../../components/blocs/Project";
import Heading from "../../../components/blocs/Heading";
import Paragraphe from "../../../components/blocs/Paragraphe";
import AboutProject from "../../../components/fr/AboutProject";
import Article from "../../../components/blocs/Article";

const ProjetAllPage = () => {
  const Projets = [
    {
      id: "1",
      src: "https://via.placeholder.com/150",
      name: "Its Gravy Kitchen's",
      role: "Front-end",
      description:
        "Site statique pour un restaurant fictif. Développé en autonomie en respectant les consignes (pas de framework).",
      tech: ["HTML", "JavaScript", "bootstrap"],
      to: "kitchens-bootstrap",
    },
    {
      id: "2",
      src: "https://via.placeholder.com/150",
      name: "Plant Clicker",
      role: "Front-end ",
      description:
        "Jeu de click en vanilla JavaScript. Il a été développé en groupe de 3 personnes. Pour ce projet nous avons utilisé pixi.js pour la partie graphique. Au clic, vous faites poussez un arbre.",
      tech: ["HTML", "JavaScript", "CSS", "pixi.js"],
      to: "plant-clicker-js",
    },
    {
      id: "3",
      to: "sora-cine",
      src: "https://via.placeholder.com/150",
      name: "Sora cine",
      description:
        "Site de streaming pour la diffusion d'anime. Réalisé en groupe de 4, utilisant une API externe pour les données. Le site rencontre quelques problèmes comme le chargement des vidéos, le design et la gestion des utilisateurs. Le projet est en cours de révision pour corriger ces problèmes.",
      role: "Front-end - chef de projet",
      tech: [
        "React",
        "react-router",
        "validator",
        "tailwindcss",
        "framer-motion",
        "Node.js",
        "Express",
        "MongoDB",
        "bcrypt",
        "cors",
        "dotenv",
        "nodemailer",
        "body-parser",
        "cookie-parser",
        "express-session",
        "jsonwebtoken",
        "mongoose",
      ],
    },
    {
      id: "4",
      src: "https://via.placeholder.com/150",
      name: "Bookface",
      description:
        "C'est un réseau socal fictif, développé en groupe de 3 personnes. L'idée de départ est de recevoir un mail qui nous invite à donner notre avis lorsqu'on reçoit une notification, par mail et contribuer à la création de contenu. Ici malheureusment une grande partie de l'architecture React est à revoir avant la publication.",
      role: "back-end ",
      tech: [
        "typescript",
        "React",
        "react-router",
        "Node.js",
        "Express",
        "mongoose",
        "bcrypt",
        "cors",
        "dotenv",
        "nodemailer",
        "mjml",
        "winston",
        "JWT (jose)",
        "multer",
        "pnpm",
      ],
      to: "bookface",
    },
    {
      id: "5",
      src: "https://via.placeholder.com/150",
      name: "Fresh shop",
      role: "fullstack",
      description:
        "Site de vente de produit pour une entreprise fictive. Le projet est en fin de construction sur les fonctionalités : filtre, panier. L'authentification est déjà mise en place de manière dynamique.",
      tech: [
        "typescript",
        "react",
        "redux",
        "redux-persist",
        "react-router",
        "framer-motion",
        "tailwindcss",
        "Node.js",
        "Express",
        "mongoose",
        "bcrypt",
        "cors",
        "dotenv",
        "nodemailer",
        "mjml",
        "winston",
        "JWT (jose)",
        "pnpm",
      ],
      to: "fresh-shop",
    },
  ];

  return (
    <>
      <Article
        className="py-24 md:w-3/4"
        children1={
          <Heading
            title="Projets"
            level="h2"
            className="text-7xl font-extralight uppercase tracking-wide"
          />
        }
        children2={
          <Paragraphe className="text-justify" children={<AboutProject />} />
        }
      />

      <hr />
      <section className="grid lg:grid-cols-2 gap-y-16 gap-x-16 py-24 ">
        {Projets.map((projet) => (
          <PorjectCard
            key={projet.id}
            id={projet.id}
            to={projet.to}
            src={projet.src}
            name={projet.name}
            content={projet.description}
            role={projet.role}
            liste={projet.tech.map((tech) => (
              <li
                key={tech}
                className="bg-fuchsia-700 p-2 rounded-lg uppercase text-xs"
              >
                {tech}
              </li>
            ))}
          />
        ))}
      </section>
    </>
  );
};

export default ProjetAllPage;
