import Heading from "../../../components/blocs/Heading";
import Article from "../../../components/blocs/Article";
import Paragraphe from "../../../components/blocs/Paragraphe";

const ItsGravyKitchen = () => {
  const ITG = [
    {
      head: "It's Gravy Kitchens",
      description:
        "Ce projet est un site web statique d'une franchise de restaurant fictive. C'était un projet à réaliser seul. J'ai été en charge de la partie front-end. J'ai utilisé le framework Bootstrap pour le design et j'ai codé en HTML, CSS et JavaScript. J'ai aussi utilisé Git pour le versionning. Puis Github pour le déploiement.",
      tech: ["html", "bootstrap", "css"],
      deploie: "Déployé avec Github",
    },
  ];
  return (
    <>
      <Article
        className="py-24 md:w-3/4"
        children1={
          <Heading
            title="It's Gravy Kitchens"
            level="h2"
            className="text-7xl font-extralight uppercase tracking-wide"
          />
        }
        children2={
          <>
            <Paragraphe
              className="text-justify"
              children={
                "Ce projet est un site web statique d'une franchise de restaurant fictive. C'était un projet à réaliser seul. J'ai été en charge de la partie front-end. J'ai utilisé le framework Bootstrap pour le design et j'ai codé en HTML, CSS et JavaScript. J'ai aussi utilisé Git pour le versionning. Puis Github pour le déploiement."
              }
            />
            <article>
              <Heading
                title="Développement"
                level="h3"
                className="text-2xl font-extralight uppercase tracking-wide pb-2"
              />
              <p className="uppercase text-zinc-400">html - bootstrap - css</p>
            </article>
            <article>
              <Heading
                title="Déploiement et versionning"
                level="h3"
                className="text-2xl font-extralight uppercase tracking-wide pb-2"
              />
              <p className="uppercase text-zinc-400">Déployé avec Github</p>
            </article>
          </>
        }
      />
    </>
  );
};
export default ItsGravyKitchen;
