import { ProjetUnitaire, Figure } from "../../../components/blocs/Project.tsx";
import bookface from "../../../assets/bookface.png";
const BookFace = () => {
  const bf = [
    {
      head: "Bookface",
      role: "Back-end",
      description:
        "Ce projet a été réalisé en groupe de 3 : 1 développeurs back-end et 2 développeurs front-end. Notre rôle était de créer un réseau social. Nous avons décidé de créer un réseau social fictif. Nous avons utilisé React pour la partie front-end. Nous avons utilisé Node.js pour la partie back-end. Nous avons utilisé Git pour le versionning. Une grande partie des routes back-end sont réalisées mais la quasi-totalité est inutilisé dans le front-end. Le projet est à réviser en y ajoutant un storer Redux pour la gestion des états.",
      tech: [
        "typescript - ",
        "React - ",
        "react-router - ",
        "Node.js - ",
        "Express - ",
        "mongoose - ",
        "bcrypt - ",
        "cors - ",
        "dotenv - ",
        "nodemailer - ",
        "mjml - ",
        "winston - ",
        "JWT (jose) - ",
        "multer - ",
        "pnpm - ",
      ],
      deploie: "Non déployé",
      tonext: "project/fresh-shop",
      toprev: "project/sora-cine",
    },
  ];
  const gallery = [
    {
      src: bookface,
      alt: "Bookface",
      figcaption: "",
    },
  ];
  return (
    <>
      {bf.map((project, index) => (
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
export default BookFace;
