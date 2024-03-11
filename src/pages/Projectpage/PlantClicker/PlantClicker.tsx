import { ProjetUnitaire, Figure } from "../../../components/blocs/Project.tsx";
import plantclicker from "../../../assets/plantclicker.png";
import plantclickerpanel from "../../../assets/plantclicker-panel.png";
import { ButtonextTwo } from "../../../components/blocs/Buttons.tsx";
import FlecheToIcon from "../../../components/Icons/FlecheToIcon";

const PlantClicker = () => {
  const pc = [
    {
      head: "Plant Clicker",
      role: "Front-end ",
      description:
        "Ce projet a été réalisé en groupe de 3 personnes. Notre objectif était de créer un jeu en JavaScript basé sur des clics. Nous avons utilisé PIXI.js pour la partie graphique. Dans le jeu, chaque clic permet de faire pousser un arbre, et les scores sont affichés via un tableau des scores.",
      tech: ["html", "css", "JavaScript", "pixi.js"],
      deploie: "Déployé avec Github",
      toprev: "project/kitchens-bootstrap",
      tonext: "project/sora-cine",
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
export default PlantClicker;
