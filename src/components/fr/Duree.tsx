import Paragraphe from "../blocs/Paragraphe";
import { ButtonOne } from "../blocs/Buttons";
import FlechTo from "../icons/FlechetoIcon";

const Duree = () => {
  const duree =
    "Il est possible de mofiier la durée de stage, jusqu'à 3 mois maximum.";
  const possible =
    "Si vous avez besoin de plus de temps, nous pouvons explorer les solutions ensemble.";
  const avancer =
    "Il est également totalement possible de commencer plus tôt si vous le souhaitez.";
  return (
    <>
      <Paragraphe children={<>{duree}</>} />
      <Paragraphe children={<>{possible}</>} />
      <Paragraphe children={<>{avancer}</>} />
      <ButtonOne
        to="/contact"
        content={
          <>
            Contactez moi
            <FlechTo />
          </>
        }
      />
    </>
  );
};

export default Duree;
