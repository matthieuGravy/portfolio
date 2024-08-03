import { useParams } from "react-router-dom";

import Templates from "../../../../layouts/Templates.tsx";
import { professionals } from "../../../../data/projets.ts";
//import Loadingimage from "../../../../components/Loadingimage";

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
            src={professional.src}
            alt={professional.alt}
          />
        ))}
    </>
  );
};
export default Professionalpage;
