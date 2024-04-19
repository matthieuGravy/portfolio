import {
  ProjetUnitaire,
  Figure,
} from "../../../../components/blocs/Project.tsx";
import bookface from "../../../../assets/bookface.png";
const BookFace = () => {
  const bf = [
    {
      head: "Bookface",
      role: "Back-end",
      description: "",
      tech: ["typescript", "Express", "MongoDB", "React", "taiwind"],
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
