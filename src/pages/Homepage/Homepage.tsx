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
      <section className="py-24 flex flex-col md:gap-24 gap-12">
        <Socials />
        <Landing />
        <Section
          children={
            <>
              <Heading title="Skills" level="h2" />
              <Hr />
              <article className="overflow-hidden flex flex-row group ">
                <Scroller />
              </article>
            </>
          }
        />
        <Section
          children={
            <>
              <Heading title="Projets" level="h2" className="" />
              <Hr />
              <ProjectDetail />
            </>
          }
        />
        <ArticleHorizontal
          className="md:border-[1px] md:border-zinc-700 md:py-24 md:px-16  py-16 px-8"
          children1={
            <>
              <section className="flex flex-col gap-y-16">
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
                  <figure className="flex flex-col gap-y-4 pt-8">
                    <ButtonOne to="/contact" content={<>Contactez moi</>} />
                    <ButtonOneSecondaire to="/about" content={<>About me</>} />
                  </figure>
                </article>
              </section>
            </>
          }
          children2={
            <>
              <Photo className=" place-self-end" />
            </>
          }
        />
      </section>
    </>
  );
};

export default Homepage;
