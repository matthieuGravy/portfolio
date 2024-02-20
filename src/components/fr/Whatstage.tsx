import Paragraphe from "../blocs/Paragraphe";
import { ButtonextTwo } from "../blocs/Buttons";
import FlechTo from "../icons/FlechetoIcon";

const Whatstage = () => {
  const whatstage =
    "Actuellement, je participe au Bootcamp intensif de Developpeur Web chez BeCode.org.";
  const whatstage2 =
    " à présent, le bootcamp arrive à terme et c'est l'opportunité pour moi de mettre en pratique mes compétences acquises.";
  return (
    <>
      <Paragraphe children={whatstage} />
      <Paragraphe children={whatstage2} />
      <ButtonextTwo
        link="https://becode.org/fr/"
        content={
          <>
            En savoir plus sur BeCode
            <FlechTo />
          </>
        }
      />
    </>
  );
};

export default Whatstage;
