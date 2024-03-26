import Hello from "../fr/Hello";
import Showcode from "../fr/Showcode";
import { Buttonext } from "../blocs/Buttons";
import { NavLink } from "react-router-dom";

interface CopyrightProps {
  author: React.ReactNode;
}
const Copyright: React.FC<CopyrightProps> = ({ author }) => {
  return <a href="https://www.linkedin.com/in/matthieugravy/">{author}</a>;
};

const Footer = () => {
  const signe = "©";
  const author = <Hello />;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 text-xs px-4 py-8 text-white uppercase font-extralight  text-zinc-400 flex flex-col gap-y-4">
      <section className="flex md:flex-row flex-col text-center gap-y-2 md:gap-y-0">
        <Buttonext
          title="Voir le code source"
          link={"https://github.com/matthieuGravy/portfolio"}
          content={<Showcode />}
        />
        <article className="flex flex-row md:justify-end justify-center pe-2 flex-1 w-full md:text-right">
          <p className="pe-2 ">
            {signe}
            {year}
          </p>
          <Copyright author={author} />
        </article>
      </section>
      <section className="flex justify-center gap-x-4">
        <NavLink to="/contact" className="text-center">
          Contact
        </NavLink>
        <NavLink to="/mentions-legales" className="text-center">
          Mentions légales
        </NavLink>
        <NavLink to="/rgpd" className="text-center">
          RGPD
        </NavLink>
      </section>
    </footer>
  );
};

export default Footer;
