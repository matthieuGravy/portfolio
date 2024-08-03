import { useParams } from "react-router-dom";

import Templates from "../../../../layouts/Templates.tsx";
import { shared } from "../../../../data/projets.ts";

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
            src={shared.src}
            alt={shared.alt}
          />
        ))}
    </>
  );
};
export default Sharedpage;
