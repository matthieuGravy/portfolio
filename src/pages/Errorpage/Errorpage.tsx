import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <section className="bg-zinc-800 w-full uppercase font-light xl:px-12 px-8">
      <h1 className="md:text-7xl text-5xl py-24 text-fuchsia-700">Oups ..</h1>
      <article className="text-neutral-400 xl:w-3/5 text-justify flex flex-col gap-y-8 pb-8">
        <p>
          Étant donné que je ne suis pas du genre à balancer, je ne vais pas
          vous dire qui est responsable de l'erreur. Mais ce n'est pas moi.
          C'est sûrement vous et si ce n'est pas vous, alors vous pouvez
          vérifier cette liste de cas possibles pour trouver la solution à votre
          problème, même si nous savons que je sais que c'est vous le coupable.
          Voici :
        </p>
        <ul className="ps-8 list-disc	flex flex-col gap-y-4">
          <li>
            Vérifiez votre connexion internet, contactez votre fournisseur
            d'accès internet pour plus d'informations. Si vous n'avez pas de
            connexion à ce moment, c'est sûrement la fin du monde.
          </li>
          <li>
            Téléphonez à internet pour vérifier que tout est en ordre. Si vous
            ne trouvez pas les coordonnées d'internet, c'est sûrement la fin du
            monde.
          </li>
          <li>
            Prenez votre télescope et vérifiez que le satellite nommé
            I.N.T.E.R.N.E.T. est toujours en orbite autour de la terre. Si ce
            n'est pas le cas, c'est sûrement la fin du monde.
          </li>
          <li>
            Vérifiez que "Skynet" n'est pas au pouvoir. Si c'est le cas, vous
            êtes en train de vivre la fin du monde.
          </li>
          <li>
            Il est possible que vous soyez sous le contrôle d'un malware qui
            vous empêche de visiter mon super site. Dans ce cas, je vous
            conseille de changer de navigateur. Si cela ne fonctionne pas, c'est
            sûrement la fin du monde.
          </li>
          <li>
            Il est possible que vous ayez été volé par un gang très dangereux,
            votre abonnement mobile. Ils ont commencé par "chip jacker" des
            paquets de chips, puis du "mug jacking", du "dog jacking", du "car
            jacking", du "home jacking", puis du "castle jacking" avant de faire
            du "holding jacking" et du "internet jacking". Si c'est le cas,
            c'est sûrement la fin du monde.
          </li>
          <li>
            Il est possible que vous soyez un Sim's et que vous n'existiez pas.
            Dans ce cas, c'est sûrement la fin du monde.
          </li>
          <li>
            Vous vous sentez observé et un décor de cinéma semble vous entourer.
            Vous faites partie d'une téléréalité depuis votre naissance.
            Contactez la production. Si malheureusement personne ne répond,
            c'est sûrement la fin du monde.
          </li>
        </ul>
        <p>
          Si vous avez vérifié tout cela et que vous êtes toujours sur cette
          page, c'est sûrement la fin du monde. Vous pouvez me contacter pour me
          dire que vous avez survécu à la fin du monde ou pour me dire que vous
          avez besoin d'un développeur pour reconstruire internet. Je suis
          disponible pour les deux.
        </p>
      </article>
      <div className="pb-8 flex flex-col xl:w-3/5 gap-y-4">
        <NavLink
          to="/"
          className="bg-neutral-50 text-zinc-800 flex justify-center py-2 hover:bg-fuchsia-700 hover:text-neutral-50 transition-colors"
        >
          Retour à la page d'accueil
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:opacity-75 flex justify-center py-2 bg-fuchsia-700 text-neutral-50 transition-colors"
        >
          Me confirmer que c'est la fin du monde
        </NavLink>
      </div>
      <article className="text-neutral-400 xl:w-3/5 text-justify flex flex-col gap-y-8 py-24">
        <p className="text-xs ">
          Vous avez pris le temps de lire tout ce que j'ai écrit, vous êtes
          sûrement ultra courageux. Mais la prochaine fois que vous avez un
          problème avec mon site, contactez-moi directement. Je vous aiderai
          volontiers. Merci.
        </p>
        <p className="text-xs">
          Si vous n'avez pas de réponse de ma part, je suis peut-être en train
          de m'instruire en regardant les épisodes de "Walker Texas Ranger".
          Essayez de me contacter sur{" "}
          <a
            href="https://www.linkedin.com/in/matthieugravy/"
            target="blank"
            className="text-blue-500"
          >
            Linkedin
          </a>
        </p>
      </article>
    </section>
  );
};

export default Errorpage;
