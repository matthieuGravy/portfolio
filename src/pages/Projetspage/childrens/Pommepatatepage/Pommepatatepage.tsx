import { Figure } from "../../../../components/blocs/Project.tsx";
import Templates from "../../../../components/Templates.tsx";

import { learnings } from "../../../../data/projets.ts";

const Pommepatatepage = () => {
  return (
    <>
      {learnings
        .filter((learning) => learning.id === "2")
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
            link={learning.link}
            source={learning.github}
            figure={learning.gallery.map((gallery, index) => (
              <Figure key={index} src={gallery.src} alt={gallery.alt} />
            ))}
          />
        ))}
    </>
  );
};
export default Pommepatatepage;
