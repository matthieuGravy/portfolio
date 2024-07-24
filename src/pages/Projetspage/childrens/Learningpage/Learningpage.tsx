import { useParams } from "react-router-dom";

import Templates from "../../../../components/Templates.tsx";
import { learnings } from "../../../../data/projets.ts";

const Learningpage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      {learnings
        .filter((learning) => learning.id === id)
        .map((learning, index) => (
          <Templates
            key={index}
            role={learning.role}
            title={learning.name}
            paragraphe={learning.description}
            ptech={learning.tech.join(" - ")}
            pversion={learning.link}
            next={learning.next}
            preview={learning.preview}
            link={learning.link}
            source={learning.github}
            src={learning.src}
          />
        ))}
    </>
  );
};
export default Learningpage;
