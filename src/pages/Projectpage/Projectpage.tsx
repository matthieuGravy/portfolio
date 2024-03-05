import { PorjectCard } from "../../components/blocs/Project";
import Heading from "../../components/blocs/Heading";
import Paragraphe from "../../components/blocs/Paragraphe";
import AboutProject from "../../components/fr/AboutProject";
import Article from "../../components/blocs/Article";
const Projectpage = () => {
  const Projets = [
    {
      id: "1",
      src: "https://via.placeholder.com/150",
      name: "Site vitrine de restaurant",
    },
    {
      id: "2",
      src: "https://via.placeholder.com/150",
      name: "Jeu de click",
    },
    {
      id: "3",
      src: "https://via.placeholder.com/150",
      name: "Plateforme de streaming",
    },
    {
      id: "4",
      src: "https://via.placeholder.com/150",
      name: "Réseau social",
    },
    {
      id: "5",
      src: "https://via.placeholder.com/150",
      name: "Site de vente de produit",
    },
  ];

  return (
    <>
      <Article
        className="py-24 w-3/4"
        children1={
          <Heading
            title="Projets"
            level="h2"
            className="text-5xl font-light uppercase tracking-wider"
          />
        }
        children2={<Paragraphe children={<AboutProject />} />}
      />

      <hr />
      <section className="grid grid-cols-2 gap-y-16 gap-x-16 py-24 ">
        {Projets.map((projet) => (
          <PorjectCard
            key={projet.id}
            id={projet.id}
            src={projet.src}
            name={projet.name}
          />
        ))}
      </section>
    </>
  );
};

export default Projectpage;
