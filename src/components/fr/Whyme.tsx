import Paragraphe from "../blocs/Paragraphe";
import { ButtonOne } from "../blocs/Buttons";
import FlechTo from "../icons/FlechetoIcon";

const Whyme = () => {
  const whyme =
    "Pendant ces derniers mois, j'ai acquis de nouvelles compétences, notamment en codage, en création de sites web, et en utilisation d'outils de développement.";
  const whyme2 =
    "En parallèle, j'ai développé des qualités essentielles telles que le travail en équipe, la résolution de problèmes, et l'adaptabilité.";
  return (
    <>
      <Paragraphe children={whyme} />
      <Paragraphe children={whyme2} />
      <ButtonOne
        to="/about"
        content={
          <>
            En savoir plus sur moi
            <FlechTo />
          </>
        }
      />
    </>
  );
};

export default Whyme;
