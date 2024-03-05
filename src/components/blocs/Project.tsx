import Heading from "./Heading";
import { ButtonTwo } from "./Buttons";

interface PorjectCardProps {
  id: string;
  src: React.ReactNode;
  name: React.ReactNode;
}

const PorjectCard: React.F<PorjectCardProps> = ({ src, name, id }) => {
  return (
    <>
      <figure className="flex flex-row overflow-hidden">
        <section className="relative">
          <img src={src} alt={name} className="w-64" />
          <p className="absolute top-2 left-4 text-8xl">{id}</p>
        </section>
        <figcaption className="w-full px-2">
          <Heading
            title={name}
            level="h3"
            className="text-3xl font-extralight uppercase tracking-wide py-4"
          />
          <hr />
          <ButtonTwo to={`/projects/${id}`} content="voir" />
        </figcaption>
      </figure>
    </>
  );
};

export { PorjectCard };
