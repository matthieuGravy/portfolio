import { useParams } from "react-router-dom";

import Templates from "../../layouts/Templates.tsx";
import { learnings, professionals, shared } from "../../data/projets.ts";

interface ProjectItem {
  id: string;
  name: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
  next: string;
  preview: string;
  github?: string;
  src: string;
  alt: string;
}

interface ProjectIteratorProps {
  project: string;
}

const ProjectIterator: React.FC<ProjectIteratorProps> = ({ project }) => {
  const { id } = useParams<{ id: string }>();
  const renderProject = (data: ProjectItem[]) => (
    <>
      {data
        .filter((item) => item.id === id)
        .map((item, index) => (
          <Templates
            key={index}
            role={item.role}
            title={item.name}
            paragraphe={item.description}
            ptech={item.tech.join(" - ")}
            pversion={item.link}
            next={item.next}
            preview={item.preview}
            link={item.link}
            source={item.github}
            src={item.src}
            alt={item.alt}
          />
        ))}
    </>
  );
  switch (project) {
    case "learning":
      return renderProject(learnings);
    case "professional":
      return renderProject(professionals);
    case "shared":
      return renderProject(shared);
    default:
      return null;
  }
};
export default ProjectIterator;
