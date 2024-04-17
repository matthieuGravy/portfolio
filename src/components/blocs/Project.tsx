import { useState } from "react";

import Heading from "./Heading";
import { ButtonCards } from "./Buttons";
import Paragraphe from "./Paragraphe";
import Article from "./Article";
import { ButtonOne, ButtonextTwo } from "./Buttons";
import FlecheRightIcon from "../icons/FlecheRightIcon";
import FlecheLeftIcon from "../icons/FlecheLeftIcon";
import FlecheToIcon from "../icons/FlecheToIcon";

interface PorjectCardProps {
  id: string;
  name: string;
  liste: React.ReactNode;
  role?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}

const PorjectCard: React.FC<PorjectCardProps> = ({
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
          {/* modifier l'intérieur de la card au hover*/}
          <article
            className={`pb-8 pt-12 px-6 h-full flex flex-col justify-between ${className} ${
              isHover ? "shadow-xl " : ""
            }`}
          >
            <p
              className={`absolute top-0 right-0  px-4 py-2 uppercase text-xs ${
                isHover ? "text-teal-500" : "text-zinc-400"
              }`}
            >
              {role}
            </p>
            <ButtonCards
              to={`/${to}`}
              onMouseEnter={() => setIsTitleHover(true)}
              onMouseLeave={() => setIsTitleHover(false)}
              onclick={buttonCardsonClick}
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
            <ul className="flex flex-wrap gap-x-4 gap-y-2">{liste}</ul>
          </article>
          <section className="">
            <ButtonOne
              to={`${to}`}
              content={<>Découvrir</>}
              onclick={buttonOneClick}
              className={`${isTitleHover ? "text-zinc-300" : ""}`}
            />
          </section>
        </article>
      </>
    </>
  );
};

interface ProjetUnitaireProps {
  title: string;
  paragraphe?: string;
  ptech?: string;
  pversion?: string;
  figure?: React.ReactNode;
  role?: string;
  tonext: string;
  toprev: string;
  source: string;
  button?: React.ReactNode;
}

const ProjetUnitaire: React.FC<ProjetUnitaireProps> = ({
  title,
  paragraphe,
  ptech,
  pversion,
  figure,
  role,
  tonext,
  toprev,
  button,
  source,
}) => {
  return (
    <>
      <Article
        className="px-2 md:w-4/5 md:m-auto lg:px-0 "
        children1={
          <>
            <section className="flex justify-between">
              <ButtonOne
                to={`/${toprev}`}
                content={
                  <>
                    <FlecheLeftIcon /> <span className="ps-2">retour</span>
                  </>
                }
              />
              <ButtonOne
                to={`/${tonext}`}
                content={
                  <>
                    <span className="pe-2">Suivant</span>
                    <FlecheRightIcon />
                  </>
                }
              />
            </section>
            <Article
              className=""
              children1={<Heading title={title} level="h2" className="" />}
              children2={
                <>
                  <figure className="pt-8 flex"></figure>
                </>
              }
            />
          </>
        }
        children2={
          <>
            <article className="md:grid md:grid-cols-2 flex flex-col  place-content-between relative gap-x-8">
              <section className="">
                <Paragraphe className="text-justify" children={paragraphe} />
                <section className="grid grid-cols-2 gap-y-8 w-4/5 m-auto">
                  <Heading level="h6" className="" title="role" />
                  <p className="uppercase text-zinc-400">{role}</p>

                  <Heading title="Stack" level="h6" className="" />
                  <p className="uppercase text-zinc-400">{ptech}</p>

                  <Heading title="Website" level="h6" className="" />
                  <p className="uppercase text-zinc-400">{pversion}</p>
                  {button}
                  <Heading title="Github" level="h6" className="" />
                  <ButtonextTwo
                    link={source}
                    title="lien github"
                    content="link"
                    className="uppercase text-zinc-400"
                  />
                </section>
              </section>
              <section className="grid grid-cols-1 gap-x-8 gap-y-16">
                {figure}
              </section>
            </article>
          </>
        }
      />
    </>
  );
};

interface FigureProps {
  src: string;
  alt: string;
  figcaption?: string;
}

const Figure: React.FC<FigureProps> = ({ src, alt, figcaption }) => (
  <figure>
    <img src={src} alt={alt} />
    <figcaption>{figcaption}</figcaption>
  </figure>
);

export { PorjectCard, ProjetUnitaire, Figure };
