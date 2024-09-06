import { useMatch } from "react-router-dom";

import ProjectIterator from "../../../components/data/ProjectIterator.tsx";

const Itempage = () => {
  const professionalMatch = useMatch("/projects/professional/*");
  const learningMatch = useMatch("/projects/learning/*");
  const sharedMatch = useMatch("/projects/shared/*");

  const renderItem = () => {
    if (professionalMatch) {
      return <ProjectIterator project="professional" />;
    } else if (learningMatch) {
      return <ProjectIterator project="learning" />;
    } else if (sharedMatch) {
      return <ProjectIterator project="shared" />;
    } else {
      return null;
    }
  };

  return <>{renderItem()}</>;
};

export default Itempage;
