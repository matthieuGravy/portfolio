import Heading from "../../../../components/blocs/Heading";
import Containers from "../../../../components/Containers";
import { CardProject } from "../../../../components/Cards";
import projet from "../../../../data/projets";

const Projectpage = () => {
  return (
    <>
      <Containers type="section-large" id="projects" className="">
        <div>
          {" "}
          <Heading
            level="h2"
            className=""
            title={
              <>
                Learning
                <br /> Projects
              </>
            }
          />
          <p>
            J'ai participé à 5 projets qui m'ont permis d'acquérir une
            expérience significative sur la gestion de projet, et le
            développement web.
          </p>
          <h2>Its Gravy Kitchen,</h2>
          <p>
            C'est un projet html/bootstrap qui m'a rendu fou. Avant de commencer
            le bootcamp avec Becode j'avais déjà appris bootstrap, sass,
            JavaScript, Vue3. On ne pouvait pas utiliser de framework ou
            JavaScript ce qui a rendu les taches répétitives et longues. Pour un
            résultat moyen.
          </p>
          <h2>Plant Clicker</h2>
          <p>
            C'est un jeu au click, l'idée sur ce projet c'était de se départager
            les tâches sur un projet commun. La difficulté que j'ai rencontré
            c'était de comprendre ce que faisait les autres quand il codait.
          </p>
          <p>
            Mais, je trouvais que dans ce projet on manquait de communication.
            Donc j'ai décidé d'utiliser l'observeur de javascript pour arriver à
            l'objectif quand je devais faire le panel de scores.
          </p>
          <h2>Sora Cine</h2>
          <p>
            C'était un projet avec React en équipe de 2 front 2 back. Les
            back-end avaient du mal à démarrer sur nodejs, à intégrer une API,
            créer des schemas mongoose. J'ai donc pris le lead sur le front-end
            pour les aider à démarrer. Mais le projet n'a pas été terminé.
          </p>
          <h2>Social Network</h2>
          <p>
            J'étais pas super content d'avor eu une mauvaise expérience en
            back-end, et je suis un touche à tout. Donc je me suis lancé comme
            back-end pour ce projet. J'ai appris à utiliser express, mongoose,
            et à créer des routes.
          </p>
          <p>
            Le back-end est fonctionnel, mais le front-end n'a jamais réellement
            débuté.
          </p>
        </div>
        <article className="bg-red-200 grid grid-cols-4 grid-rows-4">
          <div>
            {projet.map((projet) => (
              <CardProject
                key={projet.id}
                id={projet.id}
                to={projet.to}
                name={projet.name}
                liste={projet.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border-[1px] border-zinc-200 px-4 py-2 uppercase text-xs "
                  >
                    {tech}e
                  </li>
                ))}
              />
            ))}
          </div>
        </article>
      </Containers>
    </>
  );
};

export default Projectpage;
