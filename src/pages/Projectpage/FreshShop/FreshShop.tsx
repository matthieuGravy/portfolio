import { ProjetUnitaire } from "../../../components/blocs/Project.tsx";

const FreshShop = () => {
  const fs = [
    {
      head: "Fresh Shop",
      role: "Full-stack",
      description:
        "Ce projet est un site de vente en ligne de produits alimentaires dynamique. Il s'agissait d'un projet individuel pour lequel j'étais responsable du développement front-end et back-end. J'ai utilisé le framework Tailwind pour le design et j'ai programmé en React, Redux, Express et TypeScript. Git a été utilisé pour la gestion de version. Le déploiement n'est pas encore prévu, le projet est toujours en cours de développement.",
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
