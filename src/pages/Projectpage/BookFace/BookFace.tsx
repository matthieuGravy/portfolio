import { ProjetUnitaire, Figure } from "../../../components/blocs/Project.tsx";
import bookface from "../../../assets/bookface.png";
const BookFace = () => {
  const bf = [
    {
      head: "Bookface",
      role: "Back-end",
      description:
        "Ce projet a été réalisé en groupe de 3 personnes : 1 développeur back-end et 2 développeurs front-end. Notre rôle était de créer un réseau social fictif. Nous avons utilisé React pour la partie front-end et Node.js pour la partie back-end. Git a été utilisé pour la gestion de version. Bien que la majorité des routes back-end aient été mises en place, la quasi-totalité n'est pas utilisée dans le front-end. Le projet nécessite une révision afin d'ajouter un store Redux pour la gestion des états.",

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
      deploie: "Non déployé",
      tonext: "project/fresh-shop",
      toprev: "project/sora-cine",
      source: "https://github.com/matthieuGravy/book-face",
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
export default BookFace;
