import liste from "../data/technologies";

interface Tech {
  name: string;
  image: string;
}

const ListeScroller: React.FC = () => {
  return (
    <ul className="flex flex-row justify-between px-8 align-center animate animate-scroll-right gap-x-16 whitespace-nowrap group-hover:paused">
      {liste.map((tech: Tech, index: number) => (
        <li
          key={index}
          className="w-24 transition-all duration-500 ease-in-out transform hover:text-zinc-200 text-zinc-500 hover:scale-95 hover:shadow-2xl grayscale hover:grayscale-0"
        >
          <img src={tech.image} alt={tech.name} className="" />
          <p className="text-center uppercase text-xs py-4 cursor-default">
            {tech.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

const Scroller: React.FC = () => {
  return (
    <section className="flex flex-row overflow-hidden group">
      <ListeScroller />
      <ListeScroller />
      <ListeScroller />
    </section>
  );
};

export default Scroller;
