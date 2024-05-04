import { useState } from "react";

import Heading from "./blocs/Heading";
import { ButtonOne, ButtonCards } from "./blocs/Buttons";

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
  role,
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
          className={`w-full relative bg-zinc-100 transition-all ease-in-out duration-500 flex flex-col justify-between
           `}
        >
          {/* modifier l'intérieur de la card au hover ? ou pas ..*/}
          <article
            className={`pb-8 pt-12 px-6 h-full flex flex-col justify-between ${className} ${
              isHover ? "shadow-xl " : ""
            }`}
          >
            <p
              className={`invisible md:visible absolute top-0 right-0  px-4 py-2 uppercase text-xs ${
                isHover ? "text-teal-500" : "text-zinc-400"
              }`}
            >
              {role}
            </p>
            <ButtonCards
              to={`${to}`}
              onMouseEnter={() => setIsTitleHover(true)}
              onMouseLeave={() => setIsTitleHover(false)}
              onClick={buttonCardsonClick}
              content={
                <Heading
                  title={name}
                  level="h3"
                  className={` hover:text-fuchsia-700 transition-colors duration-500 ${
                    isHover ? "text-fuchsia-700" : "text-zinc-800"
                  }`}
                />
              }
            />
            <ul
              className={`flex flex-wrap gap-x-4 gap-y-2 ${
                isHover ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              {liste}
            </ul>
          </article>
          <section className="">
            <ButtonOne
              to={`${to}`}
              content={<>Découvrir</>}
              onClick={buttonOneClick}
              className={`${isTitleHover ? "text-zinc-300" : ""}`}
            />
          </section>
        </article>
      </>
    </>
  );
};

export { CardProject };
