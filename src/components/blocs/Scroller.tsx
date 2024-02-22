import {
  Css,
  Sass,
  Html,
  Bash,
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
    <Bash />,
  ];

  interface ListeScrollerProps {
    liste: React.ReactNode[];
  }

  const ListeScroller: FC<ListeScrollerProps> = ({ liste }) => {
    return (
      <ul className="flex flex-row align-center animate animate-scroll-right bg-purple-200 justify-between whitespace-nowrap group-hover:paused">
        {liste.map((tech, index) => (
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
