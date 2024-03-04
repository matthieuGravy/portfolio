import Linkedin from "../../assets/Linkedin.png";
import Github from "../../assets/github.png";

const Socials = () => {
  return (
    <figure className="grid grid-cols-2 w-1/4 place-items-center grayscale hover:grayscale-0 transition-all">
      <a
        href="https://www.linkedin.com/in/matthieuGravy"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Linkedin}
          alt="Linkedin"
          className="w-10 grayscale hover:grayscale-0 transition-all"
        />
      </a>
      <a
        href="https://wwww.github.com/matthieuGravy"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Github}
          alt="Github"
          className="w-10 grayscale hover:grayscale-0 transition-all"
        />
      </a>
    </figure>
  );
};

export default Socials;
