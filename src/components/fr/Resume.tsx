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
    <section className="grid grid-cols-2">
      <article className="flex flex-col gap-y-8">
        <Paragraphe children={paragraphe1} className="col-span-2" />
        <Paragraphe children={paragraphe2} className="col-span-2" />
        <Paragraphe children={paragraphe3} className="col-span-2" />
        <Paragraphe children={paragraphe4} className="col-span-2" />
        <Paragraphe children={paragraphe5} className="col-span-2" />
        <Paragraphe children={paragraphe6} className="col-span-2" />
      </article>
      <section className="grid grid-cols-2">
        <article className="flex flex-col gap-y-4">
          <Heading
            title="Education"
            level="h5"
            className="text-fuchsia-800 text-4xl text-center pb-2 uppercase"
          />
          <ul>
            <li>
              <Heading
                title="CESI - CESS"
                level="h6"
                className="text-zinc-400 text-lg text-center pb-2 uppercase"
              />
              <ul className="grid grid-cols-2 text-zinc-500 gap-y-2 gap-x-2">
                <li className="text-right">...-2010</li>
                <li>Institut Jean Jaurès</li>
                <li className="text-right">2014-2017</li>
                <li>Institut Jean Jaurès</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Heading
                title="Bachelier"
                level="h6"
                className="text-zinc-400 text-lg text-center pb-2 uppercase"
              />
              <ul className="grid grid-cols-2 text-zinc-500 gap-y-2 gap-x-2">
                <li className="text-right">2017-2018</li>
                <li>Université Libre de Bruxelles</li>
                <li className="text-right">2018-2019</li>
                <li>EPHEC</li>
              </ul>
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-y-4">
          <Heading
            title="EXPÉRIENCE PROFESSIONNELLE"
            level="h5"
            className="text-fuchsia-800 text-4xl text-center pb-2 uppercase"
          />
          <ul>
            <li>
              <Heading
                title="Gardiennage"
                level="h6"
                className="text-zinc-400 text-lg text-center pb-2 uppercase"
              />
              <ul className="grid grid-cols-2 text-zinc-500 gap-y-2 gap-x-2">
                <li className="text-right">2010-2011</li>
                <li>Fact Security</li>
                <li className="text-right">2011-2011</li>
                <li>Full Securit</li>
                <li className="text-right">2011-2013</li>
                <li>Trigion</li>
                <li className="text-right">2011-2017</li>
                <li>European Protection Group</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Heading
                title="Grande distribution"
                level="h6"
                className="text-zinc-400 text-lg text-center pb-2 uppercase"
              />
              <ul className="grid grid-cols-2 text-zinc-500 gap-y-2 gap-x-2">
                <li className="text-right">2013-2013</li>
                <li>Red Market</li>
                <li className="text-right">2014-2015</li>
                <li>Bart Smit</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Heading
                title="Horeca"
                level="h6"
                className="text-zinc-400 text-lg text-center pb-2 uppercase"
              />
              <ul className="grid grid-cols-2 text-zinc-500 gap-y-2 gap-x-2">
                <li className="text-right">2017-2023</li>
                <li>Pizza Hut</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Heading
                title="IT"
                level="h6"
                className="text-zinc-400 text-lg text-center pb-2 uppercase"
              />
              <ul className="grid grid-cols-2 text-zinc-500 gap-y-2 gap-x-2">
                <li className="text-right">2023</li>
                <li>BeCode</li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Resume;
