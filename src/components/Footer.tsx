import { NavLink } from "react-router-dom";

import { Buttonext } from "./blocs/Buttons";
import { linksEn, sourceEn } from "../data/en/footer";

const Footer = () => {
  const signe = "©";
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#131316]">
      <article className="grid-cols-1 md:grid-cols-2 grid px-4 md:px-0 md:w-4/5 md:m-auto py-8 uppercase text-zinc-500 text-xs gap-y-2">
        <ul className="flex items-center md:items-start flex-col gap-y-2">
          {linksEn.map((link) => (
            <li key={link.id} className="hover:text-fuchsia-700">
              <NavLink to={link.link}>{link.title}</NavLink>
            </li>
          ))}
        </ul>

        <article className="flex items-center md:items-end flex-col gap-2">
          <article className="flex flex-row gap-x-2">
            <p className=" ">
              {signe}
              {year}
            </p>
            <Buttonext
              title="author"
              link={"https://www.linkedin.com/in/matthieugravy/"}
              content={"Matthieu Gravy"}
              className=""
            />
          </article>
          <Buttonext
            title={sourceEn}
            link={"https://github.com/matthieuGravy/portfolio"}
            content={sourceEn}
            className="text-center lg:text-left"
          />
        </article>
      </article>
    </footer>
  );
};

export default Footer;
