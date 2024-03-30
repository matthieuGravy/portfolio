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
    <footer className="grid-cols-1 md:grid-cols-2 grid px-4 md:px-0 md:w-4/5 md:m-auto py-8 uppercase text-zinc-500 text-xs gap-y-2">
      <section className="flex items-center md:items-start flex-col gap-y-2">
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/mentions-legales">Mentions légales</NavLink>
        <NavLink to="/rgpd">RGPD</NavLink>
      </section>

      <article className="flex items-center md:items-end flex-col gap-2">
        <article className="flex flex-row gap-x-2">
          <p className=" ">
            {signe}
            {year}
          </p>
          <Copyright author={author} />
        </article>
        <Buttonext
          title="Voir le code source"
          link={"https://github.com/matthieuGravy/portfolio"}
          content={<Showcode />}
          className="text-center lg:text-left lg:bg-red-200"
        />
      </article>
    </footer>
  );
};

export default Footer;
