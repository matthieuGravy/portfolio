import Itsgravy from "./Itsgravy";
import { ButtonNav } from "./Buttons";

const Topnav = () => {
  const navFr = [
    { to: "/", content: "Home" },
    { to: "/internship", content: "Stage" },
    { to: "/project", content: "projets" },
    { to: "/about", content: "à propos" },
    { to: "/contact", content: "contact" },
  ];
  return (
    <header className="flex px-4 justify-between align-center fixed w-full top-0 py-4 text-neutral-50 uppercase bg-fuchsia-700 z-50">
      <ButtonNav to="/" content={<Itsgravy />} />
      <nav>
        <ul className="flex flex-cols gap-x-4 ">
          {navFr.map((nav) => (
            <li key={nav.to}>
              <ButtonNav to={nav.to} content={nav.content} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Topnav;
