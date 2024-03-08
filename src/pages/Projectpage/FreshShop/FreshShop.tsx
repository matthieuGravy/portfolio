import { ProjetUnitaire } from "../../../components/blocs/Project.tsx";

const FreshShop = () => {
  const fs = [
    {
      head: "Fresh Shop",
      role: "Full-stack",
      description:
        "Ce projet est un site web statique d'une franchise de restaurant fictive. C'était un projet à réaliser seul. J'ai été en charge de la partie front-end. J'ai utilisé le framework Bootstrap pour le design et j'ai codé en HTML, CSS et JavaScript. J'ai aussi utilisé Git pour le versionning. Puis Github pour le déploiement.",
      tech: [
        "typescript",
        "react - ",
        "redux - ",
        "redux-persist - ",
        "react-router - ",
        "framer-motion - ",
        "tailwindcss - ",
        "Node.js - ",
        "Express - ",
        "mongoose - ",
        "bcrypt - ",
        "cors - ",
        "dotenv - ",
        "nodemailer - ",
        "mjml - ",
        "winston  - ",
        "JWT (jose) - ",
        "pnpm",
      ],
      deploie: "Non déployé",
      tonext: "project/projects",
      toprev: "project/bookface",
      source: "https://github.com/matthieuGravy/freshshop",
    },
  ];
  return (
    <>
      {fs.map((project, index) => (
        <ProjetUnitaire
          key={index}
          role={project.role}
          title={project.head}
          paragraphe={project.description}
          ptech={project.tech}
          pversion={project.deploie}
          tonext={project.tonext}
          toprev={project.toprev}
          source={project.source}
        />
      ))}
    </>
  );
};

export default FreshShop;
