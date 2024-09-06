import { useMatches } from "react-router-dom";

import ListProject from "../../../../components/data/ListProject";
import Containers from "../../../../components/Containers";
import ScrollHeading from "../../../../components/animate/ScrollHeading";
import { content } from "../../../../data/projets";
import Main from "../../../../components/Main";

const Listpage = () => {
  interface ShowPathProps {
    children: React.ReactNode;
  }
  const ShowPath: FC.React<ShowPathProps> = ({ children }) => {
    const styleContainer =
      "grid md:grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 md:px-8 py-12 place-items-center";
    return;
    <>
      <article className={styleContainer}>{children}</article>
    </>;
  };

  const matches = useMatches();

  const renderListProject = () => {
    const match = matches.find((match) =>
      [
        "/projets/professionnels",
        "/projets/learnings",
        "/projets/shared",
      ].includes(match.pathname)
    );

    if (!match) return null;

    switch (match.pathname) {
      case "/projets/professional":
        return <ListProject type="professional" />;
      case "/projets/apprentissages":
        return <ListProject type="learning" />;
      case "/projets/shared":
        return <ListProject type="shared" />;
      default:
        return null;
    }
  };

  const styleHeader = "py-12 px-8";

  return (
    <Main className="flex flex-col gap-y-12 pt-12 pb-16">
      <Containers type="section-large">
        <ScrollHeading
          level="h4"
          title={content.learnings.title}
          className={styleHeader}
        />
        <ShowPath>{renderListProject()}</ShowPath>
      </Containers>
    </Main>
  );
};

export default Listpage;
