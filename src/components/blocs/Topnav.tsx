import Itsgravy from "./Itsgravy";
import { ButtonNav } from "./Buttons";

const Topnav = () => {
  return (
    <header className="flex px-4 justify-between align-center fixed w-full top-0 py-4 text-neutral-50 uppercase bg-fuchsia-700 z-50">
      <ButtonNav to="/" content={<Itsgravy />} />
      <nav>
        <ul className="flex flex-cols gap-x-4 ">
          <li>{<ButtonNav to="/" content="Home" />}</li>
          <li>{<ButtonNav to="/internship" content="Stage" />}</li>
          <li>{<ButtonNav to="/about" content="à propos" />}</li>
          <li>{<ButtonNav to="/project" content="projets" />}</li>
          <li>{<ButtonNav to="/contact" content="contact" />}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Topnav;
