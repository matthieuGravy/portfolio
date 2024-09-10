import { useLocation, NavLink, useMatch } from "react-router-dom";

import Containers from "./Containers";

const Breadcrumb = () => {
  const currentPath = useLocation().pathname;

  interface ExtractPathProps {
    path: string;
  }

  const extractPath = ({ path }: ExtractPathProps): string => {
    return path.split("/").pop() || "";
  };

  const pathname = extractPath({ path: currentPath });

  const professionalMatch = useMatch("/projects/professional/*");
  const learningMatch = useMatch("/projects/learning/*");
  const sharedMatch = useMatch("/projects/shared/*");

  const renderSection = () => {
    if (professionalMatch) {
      return "professional";
    } else if (learningMatch) {
      return "learning";
    } else if (sharedMatch) {
      return "shared";
    } else {
      return null;
    }
  };

  const section = renderSection();

  return (
    <>
      <Containers
        type="section-basic"
        className="bg-gradient-to-r from-[#131316] from-40%  via-[#1d151d] to-[#131316]"
      >
        <nav className="md:py-4 pt-4 md:ps-8 flex gap-x-4 items-center text-zinc-700 font-regular uppercase text-lg">
          <NavLink
            className={`hover:text-fuchsia-500 underline`}
            to="/projects"
          >
            Projects
          </NavLink>
          <span className=" transition-colors duration-500">{"/"}</span>
          {section && (
            <>
              <NavLink
                className={`hover:text-fuchsia-500 underline`}
                to={`/projects/${section}`}
              >
                {section}
              </NavLink>
              <span className=" transition-colors duration-500">{"/"}</span>
            </>
          )}
          <span className="">{pathname}</span>
        </nav>
      </Containers>
    </>
  );
};

export default Breadcrumb;
