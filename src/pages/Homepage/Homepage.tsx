import Hello from "../../components/fr/Hello";
import Heading from "../../components/blocs/Heading";
import Photo from "../../components/blocs/Photo";
import Paragraphe from "../../components/blocs/Paragraphe";

import ArticleHorizontal from "../../components/blocs/ArticleHorizontal";
import Accroche from "../../components/fr/Accroche";

import Scroller from "../../components/blocs/Scroller";
import Socials from "../../components/blocs/Socials";
import { ButtonOne, ButtonOneSecondaire } from "../../components/blocs/Buttons";
import Hr from "../../components/blocs/Hr";
import ProjectDetail from "../../components/fr/ProjectDetail";
import Landing from "../../components/blocs/Landing";
import Section from "../../components/blocs/Section";

const Homepage = () => {
  return (
    <>
      <section className="py-24 flex flex-col gap-12 md:gap-24 lg:gap-y-40">
        <Socials />
        <Landing />
        <article className="overflow-hidden flex flex-row group ">
          <Scroller />
        </article>
        <Section
          className="bg-yellow-200 border-yellow-200"
          children={
            <>
              <Heading title="Projets" level="h2" className="text-zinc-800" />
              <Hr />
              <ProjectDetail />
            </>
          }
        />
        <section className="bg-zinc-100 text-zinc-800 h-[100vh] w-full ">
          <section className="md:w-4/5 md:m-auto py-24">
            <h1 className="text-5xl">Matthieu Gravy</h1>
            <section className="grid grid-cols-2 ">
              <article className="col-start-2">
                <p className="tracking-widest text-2xl ">
                  Vous recherchez un développeur web capable de créer des
                  projets web rapidement et facilement ? <br />
                  Je suis votre homme !
                </p>
              </article>

              <ul className="col-start-2 gap-y-8 flex flex-col col-start-1">
                <li className="tracking-widest  ">
                  Les avantage de travailler avec moi ? Je suis rempli de
                  résilience et de détermination. Je suis reparti plus d'une
                  fois à zéro et je ne lâche jamais l'affaire.
                </li>
                <li className="tracking-widest  ">
                  Je déborde d'expérience pro variée, ce qui me permet
                  d'apporter des solutions à des problèmes variées. Je suis un
                  développeur web, mais je suis aussi un ancien responsable de
                  restaurant (5 ans) et agent de sécurité (7 ans) qui adore
                  voyager.
                </li>
                <li className="tracking-widest ">
                  La plus belle chose dans le code, c'est le partage. Et c'est
                  une valeur que je porte en moi. J'aime partager mes projets,
                  et j'aime aider les autres à réaliser les leurs.
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Homepage;
