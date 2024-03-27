import { PorjectCard } from "../../../components/blocs/Project";
import Paragraphe from "../../../components/blocs/Paragraphe";
import AboutProject from "../../../components/fr/AboutProject";
import { ButtonextTwo } from "../../../components/blocs/Buttons";
import FlecheToIcon from "../../../components/icons/FlecheToIcon";
import { JumboPrincipal } from "../../../components/blocs/Jumbo";

const ProjetAllPage = () => {
  const Projets = [
    {
      id: "1",
      src: "https://via.placeholder.com/150",
      name: "Its Gravy Kitchen's",
      role: "Front-end",
      description:
        "Site statique pour un restaurant fictif. Développé en autonomie en respectant les consignes.",
      tech: ["HTML", "JavaScript", "bootstrap"],
      to: "kitchens-bootstrap",
    },
    {
      id: "2",
      src: "https://via.placeholder.com/150",
      name: "Plant Clicker",
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
      name: "Sora cine",
      description:
        "Site de streaming pour la diffusion d'anime. Réalisé en groupe de 4 personnes, utilisant une API externe pour les données. Le site rencontre quelques problèmes tels que le chargement des vidéos, le design et la gestion des utilisateurs. Le projet est en cours de révision pour corriger ces problèmes.",
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
      name: "Fresh shop",
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
    },
  ];

  return (
    <>
      <JumboPrincipal
        title="Projets"
        children={
          <>
            <Paragraphe
              className="text-justify"
              children={
                <>
                  <AboutProject />
                  <span className="pt-8 flex">
                    <ButtonextTwo
                      link="https://github.com/matthieuGravy"
                      title="lien github"
                      content={
                        <>
                          <span className="pe-2">Voir mon github</span>
                          <FlecheToIcon />
                        </>
                      }
                      className="px-2"
                    />
                  </span>
                </>
              }
            />
          </>
        }
      />

      <section className="grid lg:grid-cols-2 gap-y-16 gap-x-16 py-24 place-content-stretch">
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
