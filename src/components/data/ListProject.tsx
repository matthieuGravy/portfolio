import React from "react";
import { NavLink } from "react-router-dom";
import { shared, learnings, professionals } from "../../data/projets.ts";

interface Project {
  id: string;
  name: string;
  src: string;
}

interface ListProjectProps {
  type: "shared" | "learning" | "professional";
}

const ListProject: React.FC<ListProjectProps> = ({ type }) => {
  const getProjects = (): Project[] => {
    switch (type) {
      case "shared":
        return shared as Project[];
      case "learning":
        return learnings as Project[];
      case "professional":
        return professionals as Project[];
      default:
        return [];
    }
  };

  const projects = getProjects();

  return (
    <>
      {projects.map((project) => (
        <React.Fragment key={project.id}>
          <figure className="flex flex-col justify-between rounded-xl">
            <NavLink to={`${type}/${project.id}`}>
              <img src={project.src} alt={project.name} />
            </NavLink>
            <NavLink
              to={`${type}/${project.id}`}
              className="flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide text-zinc-400"
            >
              {project.name}
            </NavLink>
          </figure>
        </React.Fragment>
      ))}
    </>
  );
};

export default ListProject;
