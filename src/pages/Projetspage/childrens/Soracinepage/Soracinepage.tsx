import { Figure } from "../../../../components/blocs/Project.tsx";
import sorahome from "../../../../assets/projects/sora/sora-home.png";
import soralogin from "../../../../assets/projects/sora/sora-login.png";
import soralogged from "../../../../assets/projects/sora/sora-logged.png";
import soramovie from "../../../../assets/projects/sora/sora-movies.png";
import Templates from "../../../../components/Templates.tsx";

const Soracinepage = () => {
  const sc = [
    {
      head: "SoraCine",
      role: "Front-end & chef de projet",
      description:
        "Ce projet a été réalisé en groupe de 4 personnes : 2 développeurs back-end et 2 développeurs front-end. Notre rôle était de créer un site web de streaming de films. Pour la partie back-end, nous avons utilisé une API, tandis que React a été utilisé pour la partie front-end. Git a été utilisé pour la gestion de version, et le déploiement a été effectué via Vercel.",
      tech: [
        "HTML - ",
        "TAILWIND CSS",
        "Javascript",
        "React",
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
      deploie: "Déployé avec Vercel",
      toprev: "plant-clicker",
      tonext: "bookface",
      source: "https://github.com/matthieuGravy/sora-cine",
      link: "https://sora-cine.vercel.app/",
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
        <Templates
          key={index}
          role={project.role}
          title={project.head}
          paragraphe={project.description}
          ptech={project.tech.join(" -")}
          pversion={project.deploie}
          tonext={project.tonext}
          toprev={project.toprev}
          source={project.source}
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
export default Soracinepage;
