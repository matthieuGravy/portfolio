import { PorjectCard } from "../blocs/Project";

const ProjectDetail = () => {
  const Projets = [
    {
      id: "1",
      src: "https://via.placeholder.com/150",
      name: "Restaurant Project",
      role: "Front-end",
      description:
        "Site statique pour un restaurant fictif. Développé en autonomie en respectant les consignes.",
      tech: ["HTML", "JavaScript", "bootstrap"],
      to: "kitchens-bootstrap",
    },
    {
      id: "2",
      src: "https://via.placeholder.com/150",
      name: "Clicker Game",
      role: "Front-end ",
      description:
        "Jeu de clic en vanilla JavaScript. Il a été développé en groupe de 3 personnes. Pour ce projet, nous avons utilisé pixi.js pour la partie graphique. Au clic, vous faites pousser un arbre.",
      tech: ["HTML", "JavaScript", "CSS", "pixi.js"],
      to: "plant-clicker-js",
    },
    {
      id: "3",
      to: "sora-cine",
      src: "https://via.placeholder.com/150",
      name: "Stream APP",
      description:
        "Site de streaming pour la diffusion d'anime. Réalisé en groupe de 4 personnes, utilisant une API externe pour les données. Le site rencontre quelques problèmes tels que le chargement des vidéos, le design et la gestion des utilisateurs. Le projet est en cours de révision pour corriger ces problèmes.",
      role: "Front-end",
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
      name: "Social Network",
      description:
        "C'est un réseau social fictif, développé en groupe de 3 personnes. L'idée de départ est de recevoir un mail qui nous invite à donner notre avis lorsqu'on reçoit une notification, par mail et contribuer à la création de contenu. Ici malheureusement une grande partie de l'architecture React est à revoir avant la publication.",
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
      name: "e-commerce site",
      role: "fullstack",
      description:
        "Site de vente de produits pour une entreprise fictive. Le projet est en fin de construction sur les fonctionnalités : filtre, panier. L'authentification est déjà mise en place de manière dynamique.",
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
      source: "",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 md:gap-y-16  md:gap-x-16 md:py-24">
        {Projets.map((projet) => (
          <PorjectCard
            key={projet.id}
            id={projet.id}
            to={projet.to}
            name={projet.name}
            content={projet.description}
            role={projet.role}
            liste={projet.tech.map((tech) => (
              <li
                key={tech}
                className="border-[1px] border-zinc-500 text-zinc-500 px-4 py-2 uppercase text-xs"
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

export default ProjectDetail;