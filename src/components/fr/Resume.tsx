import Paragraphe from "../../components/blocs/Paragraphe";

const Resume = () => {
  return (
    <section className="grid  grid-cols-3 gap-x-8 grid-flow-col">
      <article>
        <Paragraphe>
          J'ai une expérience variée dans le secteur de la sécurité privée en
          Belgique (le gardiennage) de 7 ans et 5 années dans l'horeca avec des
          responsabilités en management. Ma force, selon moi, est de pouvoir
          atteindre des objectifs qui semblent impossibles pour d'autres.
        </Paragraphe>
        <Paragraphe className="pt-8">
          À l'âge de 20 ans, pendant que mes amis faisaient la fête, je
          travaillais comme portier avec mes 70 kg et mon mètre 80. Ma force
          résidait dans le fait que je souhaitais passer une soirée tranquille
          et veiller au bon déroulement de l'événement pour tous. Ma difficulté
          résidait dans mon introversion, alors qu'il fallait être sociable et
          aimable. En parallèle, j'ai travaillé dans d'autres types de jobs où
          j'ai pris plus de plaisir, comme les sites industriels où la vigilance
          et la méthode étaient essentielles.
        </Paragraphe>
      </article>
      <article>
        <Paragraphe>
          Ce changement m'a permis d'assumer des responsabilités, ce que je
          désirais, et j'ai décidé d'élargir mes horizons en poursuivant des
          études. Pendant ce temps, j'ai accepté un poste de livreur après avoir
          quitté le gardiennage. Bien que le salaire ait diminué de 150 euros la
          soirée à 35 euros les 4 heures, cela n'a pas entamé ma détermination à
          effectuer le changement que j'avais décidé d'entreprendre. Avoir une
          base plus solide et être en accord avec moi-même étaient mes
          priorités.
        </Paragraphe>
        <Paragraphe className="pt-8">
          Pour augmenter mes revenus, je suis devenu à nouveau un véritable
          touche-à-tout : j'ai commencé à aider au téléphone, à la réception des
          commandes de pizza, etc. J'ai ensuite passé un test qui a démontré que
          je maîtrisais parfaitement tous les postes. En conséquence, j'ai
          obtenu davantage de responsabilités et suis devenu responsable, mais
          sans augmentation de salaire totalment adaptée.
        </Paragraphe>
      </article>
      <article>
        <Paragraphe>
          Mes compétences en management ont permis au centre où je travaillais
          d'établir des records de ventes, d'améliorer la présence du personnel
          et de mieux gérer les effectifs. Surtout, cela a permis de redresser
          le centre après 6 années de pertes et de le mettre en positif, lui
          permettant même de procéder à une rénovation.
        </Paragraphe>
        <Paragraphe className="pt-8">
          Mon développement n'est pas nécessairement rapide, mais je suis
          tenace. Ayant rencontré des difficultés avec JavaScript, j'ai décidé
          de suivre le bootcamp proposé par BeCode pour résoudre mes problèmes.
          Finalement, je me sens plus à l'aise avec JavaScript et j'ai créé des
          serveurs Express en JS et TS. J'ai une préférence pour React, bien que
          je passe parfois trop de temps à optimiser certaines lignes ou
          architectures. Faire des choix peut parfois ralentir mes projets, un
          aspect que je dois encore développer. Cependant, puisque j'aime
          apprendre, cela ne pose pas de problème pour moi.
        </Paragraphe>
      </article>
    </section>
  );
};
export default Resume;
