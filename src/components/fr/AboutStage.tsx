import Paragraphe from "../blocs/Paragraphe";
import { ButtonOne } from "../blocs/Buttons";
import FlecheToIcon from "../icons/FlecheToIcon";

const textcenter = "text-justify px-2";
const Whatstage = () => {
  const whatstage =
    "Actuellement, je participe au Bootcamp intensif de Développeur Web chez BeCode.org.";
  const whatstage2 =
    "À présent, le bootcamp arrive à terme et c'est l'opportunité pour moi de mettre en pratique mes compétences acquises.";
  return (
    <>
      <article className={textcenter}>
        <Paragraphe children={whatstage} />
        <Paragraphe children={whatstage2} className="pb-8" />
        <ButtonOne
          to="/project/projects"
          content={
            <>
              Voir les projets
              <span className="ps-2">
                <FlecheToIcon />
              </span>
            </>
          }
        />
      </article>
    </>
  );
};

const Duree = () => {
  const duree =
    "Il est possible de modifier la durée de stage, jusqu'à 3 mois maximum.";
  const possible =
    "Si vous avez besoin de plus de temps, nous pouvons explorer les solutions ensemble.";
  const avancer =
    "Il est également totalement possible de commencer plus tôt si vous le souhaitez.";
  return (
    <>
      <article className={textcenter}>
        <Paragraphe children={<>{duree}</>} />
        <Paragraphe children={<>{possible}</>} />
        <Paragraphe children={<>{avancer}</>} className="pb-8" />
        <ButtonOne
          to="/contact"
          content={
            <>
              Contactez moi
              <span className="ps-2">
                <FlecheToIcon />
              </span>
            </>
          }
        />
      </article>
    </>
  );
};

const Whyme = () => {
  const whyme =
    "Pendant ces derniers mois, j'ai acquis de nouvelles compétences, notamment en codage, en création de sites web, et en utilisation d'outils de développement.";
  const whyme2 =
    "En parallèle, j'ai développé des qualités essentielles telles que le travail en équipe, la résolution de problèmes et l'adaptabilité.";
  return (
    <>
      <article className={textcenter}>
        <Paragraphe children={whyme} />
        <Paragraphe children={whyme2} className="pb-8" />
        <ButtonOne
          to="/about"
          content={
            <>
              En savoir plus sur moi
              <span className="ps-2">
                <FlecheToIcon />
              </span>
            </>
          }
        />
      </article>
    </>
  );
};

export { Whyme, Duree, Whatstage };
