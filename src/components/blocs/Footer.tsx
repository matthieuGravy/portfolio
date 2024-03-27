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
    <footer className="lg:grid-cols-3 grid px-4 py-8 uppercase text-zinc-500 text-xs gap-y-2">
      <Buttonext
        title="Voir le code source"
        link={"https://github.com/matthieuGravy/portfolio"}
        content={<Showcode />}
        className="text-center lg:text-left lg:bg-red-200"
      />
      <section className="flex flex-col gap-y-2">
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

      <article className="flex flex-row justify-center lg:justify-end gap-x-2">
        <p className=" ">
          {signe}
          {year}
        </p>
        <Copyright author={author} />
      </article>
    </footer>
  );
};

export default Footer;
