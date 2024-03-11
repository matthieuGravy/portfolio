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
      <ul className="flex flex-row align-center animate animate-scroll-right gap-x-16 px-8 justify-between whitespace-nowrap group-hover:paused">
        {liste.map((tech: string, index: number) => (
          <li key={index} className="w-16 h-16">
            {tech}
          </li>
        ))}
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
