import Matthieu from "../fr/Matthieu";
import Itsgravy from "./Itsgravy";

const Copyright = ({ author }) => {
  return <a href="https://www.linkedin.com/in/matthieugravy/">{author}</a>;
};

const Footer = () => {
  const signe = "©";
  const author = <Matthieu />;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-fuchsia-500 grid grid-cols-2 px-4 py-8 text-white uppercase">
      <article className="ps-2">
        <Itsgravy />
      </article>
      <article className="flex flex-row justify-end pe-2 flex-1">
        <p className="pe-2">
          {signe}
          {year}
        </p>
        <Copyright author={author} />
      </article>
    </footer>
  );
};

export default Footer;
