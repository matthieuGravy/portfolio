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
      <section className="py-24 flex flex-col gap-12  md:gap-24 lg:gap-y-40">
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
        <section className="bg-zinc-700">
          <figure className="flex flex-col gap-y-16 bg-matthieu h-[50rem]">
            <header>
              <Heading title={<Hello />} level="h2" className="pb-16" />
              <Hr />
            </header>
            <article>
              <Paragraphe
                className="text-justify flex flex-col "
                children={
                  <>
                    <Accroche />
                  </>
                }
              />
              <article className="flex flex-col gap-y-4 pt-8">
                <ButtonOne to="/contact" content={<>Contactez moi</>} />
                <ButtonOneSecondaire to="/about" content={<>About me</>} />
              </article>
            </article>
          </figure>
        </section>
      </section>
    </>
  );
};

export default Homepage;
