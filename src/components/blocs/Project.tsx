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
      <figure className="flex flex-row h-[80vh] overflow-hidden">
        <section className="relative bg-blue-200">
          <img src={src} alt={name} className="w-64" />
          <p className="absolute top-0 left-2 text-8xl">{id}</p>
        </section>
        <figcaption>
          <Heading
            title={name}
            level="h3"
            className="text-3xl font-extralight uppercase tracking-wide"
          />
          <ButtonTwo to={`/projects/${id}`} content="voir" />
        </figcaption>
      </figure>
    </>
  );
};

export { PorjectCard };
