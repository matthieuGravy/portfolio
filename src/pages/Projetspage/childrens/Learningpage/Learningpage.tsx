import { useParams } from "react-router-dom";
import { Figure } from "../../../../components/blocs/Project.tsx";
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
            figure={learning.gallery?.map((gallery, index) => (
              <Figure key={index} src={gallery.src} alt={gallery.alt} />
            ))}
          />
        ))}
    </>
  );
};
export default Learningpage;
