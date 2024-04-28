import { Figure } from "../../../../components/blocs/Project.tsx";
import Templates from "../../../../components/Templates.tsx";
import bookface from "../../../../assets/bookface.png";

const BookFace = () => {
  const bf = [
    {
      head: "Bookface",
      role: "Back-end",
      description: "",
      tech: ["typescript", "Express", "MongoDB", "React", "taiwind"],
      deploie: "Non déployé",
      tonext: "shop",
      toprev: "sora-cine",
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
export default BookFace;
