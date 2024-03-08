import IGKWelcome from "../../../assets/IGK-Welcome.png";
import IGKMenu from "../../../assets/IGK-Menu.png";
import IGKContact from "../../../assets/IGK-Contact.png";
import IGKPictures from "../../../assets/IGK-Pictures.png";
import IGKRestaurant from "../../../assets/IGK-Restaurants.png";
import { ProjetUnitaire, Figure } from "../../../components/blocs/Project.tsx";

const ItsGravyKitchen = () => {
  const itg = [
    {
      head: "It's Gravy Kitchens",
      role: "Front-end",
      description:
        "Ce projet est un site web statique d'une franchise de restaurant fictive. C'était un projet à réaliser seul. J'ai été en charge de la partie front-end. J'ai utilisé le framework Bootstrap pour le design et j'ai codé en HTML, CSS et JavaScript. J'ai aussi utilisé Git pour le versionning. Puis Github pour le déploiement.",
      tech: ["html - ", "bootstrap - ", "JavaScript"],
      deploie: "Déployé avec Github",
      tonext: "project/plant-clicker-js",
      toprev: "project/projects",
    },
  ];
  const gallery = [
    {
      src: IGKWelcome,
      alt: "It's Gravy Kitchens",
      figcaption: "",
    },
    {
      src: IGKMenu,
      alt: "It's Gravy Kitchens",
      figcaption: "",
    },
    {
      src: IGKContact,
      alt: "It's Gravy Kitchens",
      figcaption: "",
    },
    {
      src: IGKPictures,
      alt: "It's Gravy Kitchens",
      figcaption: "",
    },
    {
      src: IGKRestaurant,
      alt: "It's Gravy Kitchens",
      figcaption: "",
    },
  ];
  return (
    <>
      {itg.map((project, index) => (
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
export default ItsGravyKitchen;
