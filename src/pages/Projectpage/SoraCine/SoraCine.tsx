import { ProjetUnitaire, Figure } from "../../../components/blocs/Project.tsx";
import sorahome from "../../../assets/sora-home.png";
import soralogin from "../../../assets/sora-login.png";
import soralogged from "../../../assets/sora-logged.png";
import soramovie from "../../../assets/sora-movies.png";
import { ButtonextTwo } from "../../../components/blocs/Buttons.tsx";
import FlecheToIcon from "../../../components/Icons/FlecheToIcon";

const SoraCine = () => {
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
      tonext: "project/bookface",
      toprev: "project/plant-clicker-js",
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
        <ProjetUnitaire
          key={index}
          role={project.role}
          title={project.head}
          paragraphe={project.description}
          ptech={project.tech.join(" -")}
          pversion={project.deploie}
          tonext={project.tonext}
          toprev={project.toprev}
          source={project.source}
          button={
            <figure className="pt-8 flex">
              <ButtonextTwo
                link={project.link}
                title="lien github"
                content={
                  <>
                    <span className="pe-2 uppercase">Voir le site</span>
                    <FlecheToIcon />
                  </>
                }
                className="px-2"
              />
            </figure>
          }
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
