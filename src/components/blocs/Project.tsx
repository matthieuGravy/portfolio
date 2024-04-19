import Heading from "./Heading";
import Paragraphe from "./Paragraphe";
import Article from "./Article";
import { ButtonOne, ButtonextTwo } from "./Buttons";
import FlecheRightIcon from "../icons/FlecheRightIcon";
import FlecheLeftIcon from "../icons/FlecheLeftIcon";

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
              children1={
                <Heading title={title} level="h2" className="lg:w-1/2" />
              }
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
                <section className="grid grid-cols-2 gap-y-8 w-4/5 ">
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

export { ProjetUnitaire, Figure };
