import { ProjetUnitaire, Figure } from "../../../components/blocs/Project.tsx";
import plantclicker from "../../../assets/plantclicker.png";
import plantclickerpanel from "../../../assets/plantclicker-panel.png";

const PlantClicker = () => {
  const pc = [
    {
      head: "Plant Clicker",
      role: "Front-end ",
      description:
        "Ce projet a été réalisé en groupe de 3, notre rôle était de créer un jeu en JavaScript au clic. Nous avons utilisé pixi.js pour la partie graphique. Au clic, vous faites poussez un arbre. Et voir vos scores grâce à un tableau des scores.",
      tech: ["html - ", "css - ", "JavaScript - ", "pixi.js"],
      deploie: "Déployé avec Github",
      toprev: "project/kitchens-bootstrap",
      tonext: "project/sora-cine",
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
export default PlantClicker;
