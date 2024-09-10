import { useMatch } from "react-router-dom";

import ListProject from "../../../components/data/ListProject";
import Containers from "../../../components/Containers";
import ScrollHeading from "../../../components/animate/ScrollHeading";
import { content } from "../../../data/projets";
import Main from "../../../components/Main";

const Listpage = () => {
  interface ShowPathProps {
    children: React.ReactNode;
  }
  const ShowPath: React.FC<ShowPathProps> = ({ children }) => {
    const styleContainer =
      "grid md:grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 md:px-8 py-12 place-items-center";
    return <article className={styleContainer}>{children}</article>;
  };

  const professionalMatch = useMatch("/projects/professional");
  const learningMatch = useMatch("/projects/learning");
  const sharedMatch = useMatch("/projects/shared");

  const getTitle = () => {
    if (professionalMatch) {
      return content.professionals.title;
    } else if (learningMatch) {
      return content.learnings.title;
    } else if (sharedMatch) {
      return content.shared.title;
    } else {
      return "Projets";
    }
  };

  const renderListProject = () => {
    if (professionalMatch) {
      return <ListProject type="professional" />;
    } else if (learningMatch) {
      return <ListProject type="learning" />;
    } else if (sharedMatch) {
      return <ListProject type="shared" />;
    } else {
      return null;
    }
  };

  const styleHeader = "py-12 px-8";

  return (
    <Main className="flex flex-col gap-y-12 pt-12 pb-16">
      <Containers type="section-large">
        <ScrollHeading level="h4" title={getTitle()} className={styleHeader} />
        <ShowPath>{renderListProject()}</ShowPath>
      </Containers>
    </Main>
  );
};

export default Listpage;
