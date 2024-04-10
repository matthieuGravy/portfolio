import {
  Css,
  Sass,
  Html,
  Bootstrap,
  Git,
  Javascript,
  Mongo,
  Nodejs,
  Reactjs,
  Tailwind,
  Typescript,
  Vscode,
  Vue,
} from "../gallery/Tech";

const Scroller = () => {
  const liste = [
    <Html />,
    <Css />,
    <Sass />,
    <Bootstrap />,
    <Tailwind />,
    <Javascript />,
    <Typescript />,
    <Reactjs />,
    <Vue />,
    <Nodejs />,
    <Mongo />,
    <Git />,
    <Vscode />,
  ];

  interface ListeScrollerProps {
    liste: React.ReactNode[];
  }

  const ListeScroller: React.FC<ListeScrollerProps> = ({ liste }) => {
    return (
      <ul className="flex flex-row justify-between px-8 align-center animate animate-scroll-right gap-x-16 whitespace-nowrap group-hover:paused">
        {liste.map((tech: React.ReactNode, index: number) => {
          if (typeof tech === "object") {
            return (
              <li
                key={index}
                className="w-24 transition-all duration-500 ease-in-out transform hover:text-zinc-200 text-zinc-500 hover:scale-95 hover:shadow-2xl grayscale hover:grayscale-0"
              >
                {tech}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <>
      <ListeScroller liste={liste} />
      <ListeScroller liste={liste} />
      <ListeScroller liste={liste} />
    </>
  );
};

export default Scroller;
