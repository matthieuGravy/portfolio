import Templates from "../../../../components/Templates.tsx";

import { learnings } from "../../../../data/projets.ts";

const Dockerpage = () => {
  return (
    <>
      {learnings
        .filter((learning) => learning.id === "7")
        .map((learning, index) => (
          <Templates
            key={index}
            role={learning.role}
            title={learning.name}
            paragraphe={learning.description}
            ptech={learning.tech.join(" - ")}
            pversion={learning.link}
            tonext={learning.tonext}
            toprev={learning.toprev}
            source={learning.github}
          />
        ))}
    </>
  );
};

export default Dockerpage;
