import Itsgravy from "./Itsgravy";
import { ButtonNav } from "./Buttons";

const Topnav = () => {
  return (
    <>
      <header>
        <Itsgravy />
      </header>
      <nav>
        <ul>
          <li>{<ButtonNav to="/" content="Home" />}</li>
          <li>{<ButtonNav to="/internship" content="Stage" />}</li>
          <li>{<ButtonNav to="/about" content="à propos" />}</li>
          <li>{<ButtonNav to="/project" content="projets" />}</li>
          <li>{<ButtonNav to="/contact" content="contact" />}</li>
        </ul>
      </nav>
    </>
  );
};

export default Topnav;
