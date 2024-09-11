import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import Containers from "./Containers";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const renderBreadcrumbItems = () => {
    let currentPath = "";
    return pathSegments.map((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      return (
        <React.Fragment key={segment}>
          {index > 0 && (
            <span className="transition-colors duration-500">{" / "}</span>
          )}
          {isLast ? (
            <span className="text-zinc-500">{segment}</span>
          ) : (
            <NavLink
              className="hover:text-fuchsia-500 underline underline-offset-4"
              to={currentPath}
            >
              {segment}
            </NavLink>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <Containers type="section-basic" className="pb-8">
      <nav className="md:py-4 pt-4 flex flex-wrap gap-x-4 items-center text-zinc-700 font-regular uppercase text-lg">
        {renderBreadcrumbItems()}
      </nav>
    </Containers>
  );
};

export default Breadcrumb;
