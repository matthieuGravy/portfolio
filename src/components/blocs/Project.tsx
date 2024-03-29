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
  content: React.ReactNode;
  liste: React.ReactNode;
  role?: string;
  to?: string;
}

const PorjectCard: React.FC<PorjectCardProps> = ({
  name,
  role,
  content,
  liste,
  to,
}) => {
  return (
    <>
      <ButtonCards
        to={`/project/${to}`}
        content={
          <>
            <article className="w-full">
              <Heading
                title={name}
                level="h3"
                className="text-4xl font-extralight uppercase tracking-wide pb-4"
              />
              <hr />
              <Heading
                title={role}
                level="h4"
                className="text-xl font-extralight uppercase tracking-wide py-4"
              />
              <Paragraphe className="text-justify pt-4" children={content} />
              <section className="pt-4 pb-8">
                <Heading
                  title="Technologies"
                  level="h4"
                  className="text-xl font-extralight uppercase tracking-wide py-4"
                />
                <ul className="flex flex-wrap gap-2">{liste}</ul>
              </section>
            </article>
          </>
        }
      />
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
              children1={
                <Heading
                  title={title}
                  level="h2"
                  className="md:text-7xl text-5xl font-extralight uppercase tracking-wide"
                />
              }
              children2={
                <>
                  <Heading
                    level="h3"
                    className="text-4xl font-extralight uppercase tracking-wide"
                    title={role}
                  />
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
                <section className="sticky top-14 flex flex-col gap-y-8 pb-24">
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
