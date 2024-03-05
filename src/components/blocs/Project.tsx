import Heading from "./Heading";
import { ButtonCards } from "./Buttons";
import Paragraphe from "./Paragraphe";

interface PorjectCardProps {
  id: string;
  src: React.ReactNode;
  name: React.ReactNode;
  content: React.ReactNode;
  liste: React.ReactNode;
  role?: string;
}

const PorjectCard: React.F<PorjectCardProps> = ({
  src,
  name,
  id,
  role,
  content,
  liste,
}) => {
  return (
    <>
      <ButtonCards
        to={`/projects/${id}`}
        content={
          <>
            <figure className="flex flex-row gap-x-4">
              <section className="relative">
                <img src={src} alt={name} className="w-64" />
                <p className="absolute top-2 left-4 text-8xl">{id}</p>
              </section>
              <figcaption className="w-full px-2">
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
              </figcaption>
            </figure>
          </>
        }
      />
    </>
  );
};

export { PorjectCard };
