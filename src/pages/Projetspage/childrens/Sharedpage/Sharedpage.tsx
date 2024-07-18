import { useParams } from "react-router-dom";
import { Suspense } from "react";

import { Figure } from "../../../../components/blocs/Project.tsx";
import Templates from "../../../../components/Templates.tsx";
import { shared } from "../../../../data/projets.ts";
import Loadingimage from "../../../../components/Loadingimage";

const Sharedpage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      {shared
        .filter((shared) => shared.id === id)
        .map((shared, index) => (
          <Templates
            key={index}
            role={shared.role}
            title={shared.name}
            paragraphe={shared.description}
            ptech={shared.tech.join(" - ")}
            pversion={shared.link}
            next={shared.next}
            preview={shared.preview}
            link={shared.link}
            source={shared.github}
            figure={shared.gallery?.map((gallery, index) => (
              <Suspense key={index} fallback={<Loadingimage />}>
                <Figure src={gallery.src} alt={gallery.alt} />
              </Suspense>
            ))}
          />
        ))}
    </>
  );
};
export default Sharedpage;
