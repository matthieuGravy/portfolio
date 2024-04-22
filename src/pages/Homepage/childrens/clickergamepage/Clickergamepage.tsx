import { Figure } from "../../../../components/blocs/Project.tsx";
import plantclicker from "../.././../../assets/plantclicker.png";
import plantclickerpanel from "../../../../assets/plantclicker-panel.png";
import Templates from "../../../../components/Templates.tsx";

const PlantClicker = () => {
  const pc = [
    {
      head: "Plant Clicker",
      role: "Front-end ",
      description:
        "Ce projet a été réalisé en groupe de 3 personnes. Notre objectif était de créer un jeu en JavaScript basé sur des clics. Nous avons utilisé PIXI.js pour la partie graphique. Dans le jeu, chaque clic permet de faire pousser un arbre, et les scores sont affichés via un tableau des scores.",
      tech: ["html", "css", "JavaScript", "pixi.js"],
      deploie: "Déployé avec Github",
      toprev: "itg-kitchens",
      tonext: "sora-cine",
      source: "https://github.com/matthieuGravy/plant-clicker",
      link: "https://matthieugravy.github.io/plant-clicker/",
    },
  ];
  const gallery = [
    {
      src: plantclicker,
      alt: "Plant Clicker",
      figcaption: "",
    },
    {
      src: plantclickerpanel,
      alt: "Plant Clicker",
      figcaption: "",
    },
  ];
  return (
    <>
      {pc.map((project, index) => (
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
export default PlantClicker;
