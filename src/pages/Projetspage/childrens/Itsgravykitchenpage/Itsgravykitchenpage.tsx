import IGKWelcome from "../../../../assets/IGK-Welcome.png";
import IGKMenu from "../../../../assets/IGK-Menu.png";
import IGKContact from "../../../../assets/IGK-Contact.png";
import IGKPictures from "../../../../assets/IGK-Pictures.png";
import IGKRestaurant from "../../../../assets/IGK-Restaurants.png";
import { Figure } from "../../../../components/blocs/Project.tsx";
import Templates from "../../../../components/Templates.tsx";
const ItsGravyKitchen = () => {
  const itg = [
    {
      head: "It's Gravy Kitchens",
      role: "Front-end",
      description:
        "Ce projet est un site web statique pour une franchise de restaurant fictive. Il s'agissait d'un projet à réaliser seul, pour lequel j'ai assumé la responsabilité du développement front-end. J'ai utilisé le framework Bootstrap pour le design, et j'ai programmé en HTML, CSS et JavaScript. Git a été utilisé pour la gestion de version, et le déploiement a été effectué via GitHub.",
      tech: ["html", "bootstrap", "JavaScript"],
      deploie: "Déployé avec Github",
      toprev: "shop",
      tonext: "plant-clicker",
      link: "https://matthieugravy.github.io/restaurant-css-framework/index.html",
      source: "https://github.com/matthieuGravy/restaurant-css-framework",
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
export default ItsGravyKitchen;
