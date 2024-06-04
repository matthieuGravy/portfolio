import { Figure } from "../../../../components/blocs/Project.tsx";
import Templates from "../../../../components/Templates.tsx";

import { professionals } from "../../../../data/projets.ts";

const Akwanzapage = () => {
  return (
    <>
      {professionals
        .filter((professional) => professional.id === "1")
        .map((professional, index) => (
          <Templates
            key={index}
            role={professional.role}
            title={professional.name}
            paragraphe={professional.description}
            ptech={professional.tech.join(" - ")}
            pversion={professional.link}
            tonext={professional.tonext}
            toprev={professional.toprev}
            link={professional.link}
            figure={professional.gallery.map((gallery, index) => (
              <Figure key={index} src={gallery.src} alt={gallery.alt} />
            ))}
          />
        ))}
    </>
  );
};
export default Akwanzapage;
