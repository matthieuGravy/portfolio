import Linkedin from "../../assets/Linkedin.png";
import Github from "../../assets/github.png";
import { ButtonextTwo } from "./Buttons";

const Socials = () => {
  return (
    <figure className="w-2/5 grid grid-cols-2 gap-x-8">
      <ButtonextTwo
        link="https://www.linkedin.com/in/matthieuGravy"
        title="Linkedin"
        className="flex flex-row justify-start "
        content={
          <>
            <img
              src={Linkedin}
              alt="Linkedin"
              className="w-6 grayscale transition-all me-2"
            />
            /matthieugravy/
          </>
        }
      />
      <ButtonextTwo
        link="https://wwww.github.com/matthieuGravy"
        title="Github"
        className="flex flex-row items-center "
        content={
          <>
            <img
              src={Github}
              alt="Github"
              className="w-6 grayscale transition-all me-2 "
            />
            /matthieuGravy
          </>
        }
      />
    </figure>
  );
};

export default Socials;
