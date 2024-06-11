import { useParams } from "react-router-dom";
import { Suspense } from "react";

import { Figure } from "../../../../components/blocs/Project.tsx";
import Templates from "../../../../components/Templates.tsx";
import { professionals } from "../../../../data/projets.ts";
import Loadingimage from "../../../../components/Loadingimage";

const Professionalpage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      {professionals
        .filter((professional) => professional.id === id)
        .map((professional, index) => (
          <Templates
            key={index}
            role={professional.role}
            title={professional.name}
            paragraphe={professional.description}
            ptech={professional.tech.join(" - ")}
            pversion={professional.link}
            next={professional.next}
            preview={professional.preview}
            link={professional.link}
            figure={professional.gallery?.map((gallery, index) => (
              <Suspense key={index} fallback={<Loadingimage />}>
                <Figure key={index} src={gallery.src} alt={gallery.alt} />
              </Suspense>
            ))}
          />
        ))}
    </>
  );
};
export default Professionalpage;
