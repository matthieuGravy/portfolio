import ParallaxTextor from "../../components/blocs/ParallaxTextor";
import Heading from "../../components/blocs/Heading";

const Aboutpage = () => {
  return (
    <>
      <section className="h-[100vh] flex flex-col pt-24">
        <section>
          <Heading
            title={<>About me</>}
            level="h1"
            className="text-4xl lg:text-5xl"
          />
          <h2>mes interets</h2>
          <p>
            I'm passionate web developper, I like to create but j'aime le
            travail bien fait. J'aime suivre les bonnes pratiques et les mettre
            en places. I like to learn and to discover new things. If task is
            repeated I like to optimised it.
          </p>

          <p>
            L'environnement JS (link article firstlanguage) permet d'avoir une
            approche full stack, qui m'offre une liberté de création et
            d'organisation.
          </p>

          <p>
            Ce que j'aime dans le développement web, c'est l'environnement libre
            à travers des outils open source. J'aime la communauté qui partage
            et qui évolue ensemble.
          </p>

          <h2>mes passions / temps libre</h2>
          <p>
            During my free time I like have a time for my family. I'm a daddy
            and I'm proud of it.
          </p>
          <p>I like play at jeu de société</p>
          <p>
            Present I do sport with tennis, avant I discover and praciced a lot
            of sport in sport-etude during my school period and outside i do
            athletisme, rugby, Penchak Silat (Mastro System Defense), boxe
            thailandaise.
          </p>
          <h2>Spirit</h2>
          <p>
            I like self development : I think is important to evoluate all time.
            My life turn over the mindset. This is never easy to change or
            accepted some of things. But I accepted that I not de self guy that
            I was, or i thought know.
          </p>
          <p>
            I accepted that my profile is different. On ne choisit pas son
            environnement et il m'a fallut beaycoup de temps pour concervoir que
            je pouvais espèrer un avenir un meilleur.
          </p>
          <p>
            This is important for me to transform experince with values. All of
            my experiences are differents but the most important is to learn and
            to grow up.
          </p>
        </section>
        <section>
          <Heading title={<>Skills</>} level="h2" className="" />
          <article>
            <Heading title={<>Main language</>} level="h3" className="" />
            <ul>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </article>
          <article>
            <Heading title={<>Framework </>} level="h3" className="" />
            <ul>
              <li>TypeScript</li>
              <li>Vue</li>
            </ul>
          </article>
          <article>
            <Heading title={<>Style </>} level="h3" className="" />
            <ul>
              <li>CSS</li>
              <li>Sass</li>
              <li>Tailwind css</li>
              <li>Bootstrap</li>
              <li>Daisy ui</li>
            </ul>
          </article>
          <article>
            <Heading title={<>Backend language</>} level="h3" className="" />
            <ul>
              <li>Nodejs</li>
              <li>Express</li>
            </ul>
          </article>
          <article>
            <Heading title={<>Notions</>} level="h3" className="" />
            <ul>
              <li>Python</li>
              <li>Django</li>
              <li>PHP</li>
              <li>Pug JS</li>
              <li>EJS</li>
            </ul>
          </article>
          <article>
            <Heading title={<>Miscellaneous</>} level="h3" className="" />
            <ul>
              <li>Git</li>
              <li>VS Code</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>Trello</li>
              <li>Figma</li>
            </ul>
          </article>
        </section>
        <section className="grid w-1/4 grid-cols-2 grid-rows-auto bg-red-300">
          {/* d3 */}
          <Heading title={<>Projects</>} level="h2" className=" col-span-2 " />
          <article className="bg-red-200">
            <h2>Personal Project realized</h2>
            <figure>
              <div className="h-20 w-20 rounded-full border-4 relative flex items-center justify-center">
                <p className="text-center">5</p>
              </div>
            </figure>
          </article>
          <article>
            <h2>Professional Project realized</h2>
            <figure>
              <div className="h-20 w-20 rounded-full border-4 relative flex items-center justify-center">
                <p className="text-center">2</p>
              </div>
            </figure>
          </article>
        </section>
        <ParallaxTextor />
      </section>
    </>
  );
};

export default Aboutpage;
