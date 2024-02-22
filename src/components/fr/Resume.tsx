import Paragraphe from "../blocs/Paragraphe";
import Heading from "../blocs/Heading";
const Resume = () => {
  const paragraphe1 =
    "En 2010, j'ai pris la décision de quitter l'école pour me lancer dans le domaine de la sécurité en Belgique, où j'ai acquis sept années d'expérience enrichissante dans le gardiennage. En 2014, j'ai décidé de reprendre mes études et j'ai obtenu le CESS, l'équivalent du Baccalauréat en France. ";
  const paragraphe2 =
    "Cependant, après cette réalisation, j'ai traversé une période d'exploration professionnelle où j'ai tenté diverses opportunités sans vraiment trouver ma voie. J'ai alors décidé de m'investir pleinement dans le secteur de la restauration rapide, où j'ai rapidement gravi les échelons pour devenir shift leader, assumant ainsi des responsabilités de manager, tout en continuant à nourrir mon intérêt pour le développement web.";
  const paragraphe3 =
    "Bien que j'aie déjà acquis des bases en HTML, CSS, PHP et MySQL, j'ai ressenti le besoin d'approfondir mes connaissances. Je me suis donc tourné vers des plateformes comme Dyma, mais ai rencontré des défis notamment avec JavaScript, m'incitant à explorer le framework Vue.js.";
  const paragraphe4 =
    "Par la suite, j'ai entrepris une formation intensive chez BeCode, qui a véritablement transformé ma vision du travail dans le développement web. Cette expérience m'a permis de découvrir l'importance du travail en équipe, ainsi que l'utilisation d'outils de gestion de versions tels que Git et GitHub, et la méthodologie Agile.";
  const paragraphe5 =
    "Grâce à cette formation, j'ai également eu l'opportunité d'explorer un large éventail de technologies modernes telles que React, Redux, Node.js, Express.js, MongoDB, ainsi que des outils comme Postman et Insomnia pour le test et le débogage. De plus, j'ai acquis des compétences dans la création et l'utilisation d'API, ainsi que dans le déploiement d'applications avec Docker. ";
  const paragraphe6 =
    "Cette trajectoire m'a non seulement permis d'acquérir des compétences techniques solides, mais elle m'a également enseigné l'importance du travail collaboratif, de l'adaptabilité et de la persévérance dans un domaine en constante évolution.";
  return (
    <article className="grid grid-cols-3 gap-y-16 gap-x-8">
      <Paragraphe children={paragraphe1} className="col-span-2" />
      <section>
        <ul>
          <li>
            <Heading
              title="Gardiennage"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>European Protection Group</li>
              <li>Trigion</li>
              <li>Fact Security</li>
              <li>Full Security</li>
            </ul>
          </li>
          <li>
            <Heading
              title="CESI - CESS"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>Institut Jean Jaurès Charleroi</li>
            </ul>
          </li>
          <li>
            <Heading
              title="Job d'étudiant"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>Bart Smit</li>
              <li>European Protection Group</li>
            </ul>
          </li>
        </ul>
      </section>
      <Paragraphe children={paragraphe2} className="col-span-2" />
      <section>
        <ul>
          <li>
            <Heading
              title="Job d'étudiant"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>Pizza Hut</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <Heading
              title="Parcours supérieur"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>ULB</li>
              <li>EPHEC</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <Heading
              title="Restauration rapide"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>Pizza Hut</li>
            </ul>
          </li>
        </ul>
      </section>
      <Paragraphe children={paragraphe3} className="col-span-2" />
      <section>
        <ul>
          <li>
            <Heading
              title="Apprentissage autodidacte"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>Dyma</li>
              <li>Gsap</li>
            </ul>
          </li>
        </ul>
      </section>
      <Paragraphe children={paragraphe4} className="col-span-2" />
      <section>
        <ul>
          <li>
            <Heading
              title="Bootcamp"
              level="h6"
              className="text-neutral-400 text-lg"
            />
            <ul className="ps-2">
              <li>BeCode</li>
            </ul>
          </li>
        </ul>
      </section>
      <Paragraphe children={paragraphe5} className="col-span-2" />
      <section></section>
      <Paragraphe children={paragraphe6} className="col-span-2" />
    </article>
  );
};

export default Resume;
