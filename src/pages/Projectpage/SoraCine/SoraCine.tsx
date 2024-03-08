import { ProjetUnitaire, Figure } from "../../../components/blocs/Project.tsx";
import sorahome from "../../../assets/sora-home.png";
import soralogin from "../../../assets/sora-login.png";
import soralogged from "../../../assets/sora-logged.png";
import soramovie from "../../../assets/sora-movies.png";

const SoraCine = () => {
  const sc = [
    {
      head: "SoraCine",
      role: "Front-end & chef de projet",
      description:
        "Ce projet a été réalisé en groupe de 4 : 2 développeurs back-end et 2 développeurs front-end. Notre rôle était de créer un site web de streaming de film. Nous avons utilisé une API pour la partie back-end. Nous avons utilisé React pour la partie front-end. Nous avons utilisé Git pour le versionning. Puis Vercel pour le déploiement.",
      tech: [
        "HTML - ",
        "TAILWIND CSS - ",
        "Javascript - ",
        "React - ",
        "Node.js - ",
        "Express - ",
        "MongoDB - ",
        "bcrypt - ",
        "cors - ",
        "dotenv - ",
        "nodemailer - ",
        "body-parser - ",
        "cookie-parser - ",
        "express-session - ",
        "jsonwebtoken - ",
        "mongoose -",
      ],
      deploie: "Déployé avec Vercel",
      tonext: "project/bookface",
      toprev: "project/plant-clicker-js",
    },
  ];
  const gallery = [
    {
      src: sorahome,
      alt: "SoraCine",
      figcaption: "Page d'accueil",
    },
    {
      src: soralogin,
      alt: "SoraCine",
      figcaption: "Page de connexion",
    },
    {
      src: soralogged,
      alt: "SoraCine",
      figcaption: "Page utilisateur connecté",
    },
    {
      src: soramovie,
      alt: "SoraCine",
      figcaption: "Page de film",
    },
  ];

  return (
    <>
      {sc.map((project, index) => (
        <ProjetUnitaire
          key={index}
          role={project.role}
          title={project.head}
          paragraphe={project.description}
          ptech={project.tech}
          pversion={project.deploie}
          tonext={project.tonext}
          toprev={project.toprev}
          figure={gallery.map((img, index) => (
            <Figure
              key={index}
              src={img.src}
              alt={img.alt}
              figcaption={img.figcaption}
            />
          ))}
        />
      ))}
    </>
  );
};
export default SoraCine;
