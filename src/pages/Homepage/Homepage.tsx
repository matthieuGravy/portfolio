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
        <section className="bg-yellow-200 md:w-4/5 md:m-auto pt-24  lg:px-0">
          <>
            <Heading
              title="Projets"
              level="h2"
              className="text-zinc-800 text-center lg:text-left"
            />
            <section className="pt-16 pb-16 md:pb-0 md:pt-0 px-4 md:px-8">
              <ProjectDetail />
            </section>
          </>
        </section>
        <section className="bg-zinc-100 text-zinc-800 pt-24 pb-52 w-full">
          <section className="md:w-4/5 md:m-auto px-2 lg:px-0 lg:grid lg:grid-cols-2">
            <article className="pb-8 lg:pb-0 text-center lg:text-left">
              <h2 className="text-5xl uppercase">Matthieu Gravy</h2>
            </article>
            <article>
              <p className="tracking-widest text-2xl text-center lg:text-left">
                Vous recherchez un développeur web capable de créer des projets
                web rapidement et facilement ?
              </p>
              <article className="pt-16 w-4/5 m-auto">
                <ul className="gap-y-8 flex flex-col md:bg-yellow-200 py-4 px-4">
                  <h2 className="text-3xl text-center">Each words</h2>
                  <li className="tracking-widest ">
                    L'un des avantages de travailler avec moi ? Je suis doté de
                    résilience et de détermination. J'ai repris à zéro plus
                    d'une fois et je ne lâche jamais l'affaire.
                  </li>
                  <li className="tracking-widest  ">
                    J'ai une expérience professionnelle riche et variée, ce qui
                    me permet d'apporter des solutions à des problèmes variés.
                  </li>
                  <li className="tracking-widest ">
                    Je suis précis et rigoureux. Je développe un code de
                    qualité, facile à faire évoluer et réutilisable.
                  </li>
                </ul>
              </article>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default Homepage;
