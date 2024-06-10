import { useState } from "react";

import { ButtonCards } from "./blocs/Buttons";
import { NavLink } from "react-router-dom";

interface CardProjectProps {
  id: string;
  name: string;
  liste: React.ReactNode;
  role?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
  buttonCardsonClick?: () => void;
  buttonOneClick?: () => void;
}

const CardProject: React.FC<CardProjectProps> = ({
  name,
  liste,
  to,
  className,
  buttonCardsonClick,
  buttonOneClick,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isTitleHover, setIsTitleHover] = useState(false);

  return (
    <>
      <>
        <article
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`relative transition-all ease-in-out duration-500 flex flex-col justify-between rounded-xl
           `}
        >
          {/* modifier l'intérieur de la card au hover ? ou pas ..*/}
          <article
            className={`h-full flex flex-col justify-between px-4 py-4 space-y-4 border-[1px] border-teal-200 ${className} ${
              isHover ? "shadow-xl " : ""
            }`}
          >
            <ButtonCards
              to={`${to}`}
              onMouseEnter={() => setIsTitleHover(true)}
              onMouseLeave={() => setIsTitleHover(false)}
              onClick={buttonCardsonClick}
              content={
                <>
                  <h3
                    className={`font-rubik text-4xl xl:text-4xl  uppercase tracking-wide text-zinc-700 hover:text-fuchsia-600 transition-colors duration-500
                    `}
                  >
                    {name}
                  </h3>
                </>
              }
            />
            <ul
              className={`flex flex-wrap gap-x-4 gap-y-2 font-sintony tracking-widest ${
                isHover ? "text-teal-400" : "text-zinc-400"
              }`}
            >
              {liste}
            </ul>
          </article>
          <section className="">
            <NavLink
              to={`${to}`}
              onClick={buttonOneClick}
              className={` uppercase  flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide ${
                isTitleHover ? "text-zinc-300" : "invisible text-zinc-300"
              }`}
            >
              Discover
            </NavLink>
          </section>
        </article>
      </>
    </>
  );
};

export { CardProject };
