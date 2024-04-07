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
}

const PorjectCard: React.FC<PorjectCardProps> = ({
  name,
  role,
  liste,
  to,
  className,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <>
        <article
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`w-full relative bg-zinc-100 transition-all ease-in-out duration-500 flex flex-col justify-between
          ${className} ${isHover ? "shadow-xl bg-zinc-800" : ""}`}
        >
          <article className="pb-8 pt-12 px-6">
            <p className="absolute top-0 right-0 text-zinc-400 px-4 py-2 uppercase text-xs transition-colors duration-500">
              {role}
            </p>
            <ButtonCards
              to={`/project/${to}`}
              content={
                <Heading
                  title={name}
                  level="h3"
                  className={`text-zinc-800 hover:text-fuchsia-700 transition-colors duration-500 ${
                    isHover ? "text-zinc-200" : ""
                  }`}
                />
              }
            />

            <ul className="flex flex-wrap gap-x-4 gap-y-2">{liste}</ul>
          </article>
          <section className="">
            <ButtonOne to={`project/${to}`} content={<>Découvrir</>} />
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
        className="py-24  lg:w-full"
        children1={
          <>
            <Article
              className="py-24"
              children1={<Heading title={title} level="h2" className="" />}
              children2={
                <>
                  <Heading level="h3" className="" title={role} />
                  <figure className="pt-8 flex">
                    <ButtonextTwo
                      link={source}
                      title="lien github"
                      content={
                        <>
                          <span className="pe-2 uppercase">
                            Voir le code source
                          </span>
                          <FlecheToIcon />
                        </>
                      }
                      className="px-2"
                    />
                  </figure>
                </>
              }
            />
            <hr className="pb-8" />
          </>
        }
        children2={
          <>
            <article className="md:grid md:grid-cols-2 flex flex-col  place-content-between relative gap-x-8">
              <section className="">
                <section className="sticky top-24 flex flex-col gap-y-8 pb-24">
                  <Paragraphe className="text-justify" children={paragraphe} />
                  <article>
                    <Heading
                      title="Développement"
                      level="h3"
                      className="text-2xl font-extralight uppercase tracking-wide pb-2"
                    />
                    <p className="uppercase text-zinc-400">{ptech}</p>
                  </article>
                  <article>
                    <Heading
                      title="Déploiement et versionning"
                      level="h3"
                      className="text-2xl font-extralight uppercase tracking-wide pb-2"
                    />
                    <p className="uppercase text-zinc-400">{pversion}</p>
                    {button}
                  </article>
                </section>
              </section>
              <section className="grid grid-cols-1 gap-x-8 gap-y-16">
                {figure}
              </section>
            </article>
          </>
        }
      />
      <section className="flex justify-between pb-24">
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
