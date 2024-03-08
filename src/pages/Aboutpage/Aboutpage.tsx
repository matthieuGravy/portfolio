import { ButtonextTwo } from "../../components/blocs/Buttons";
import FlecheToIcon from "../../components/Icons/FlecheToIcon";

import Photo from "../../components/blocs/Photo";
import Scroller from "../../components/blocs/Scroller";
import Resume from "../../components/fr/Resume";

import Heading from "../../components/blocs/Heading";
import Article from "../../components/blocs/Article";
import Accroche from "../../components/fr/Accroche";

import ParallaxTextor from "../../components/blocs/ParallaxTextor";

const Aboutpage = () => {
  const titre = <>Matthieu</>;

  return (
    <>
      <section className="md:grid md:grid-cols-3 flex md:flex-none flex-col md:gap-y-16 py-24">
        <section className="md:col-span-2">
          <Article
            className="justify-between w-full md:flex-col"
            children1={
              <Heading
                title={titre}
                level="h1"
                className="text-7xl font-extralight uppercase tracking-wide"
              />
            }
            children2={
              <>
                <Accroche />
                <figure className="pt-8 flex">
                  <ButtonextTwo
                    link="https://www.linkedin.com/in/matthieugravy/"
                    title="lien github"
                    content={
                      <>
                        <span className="pe-2 uppercase">
                          Suivez moi sur Linkedin
                        </span>
                        <FlecheToIcon />
                      </>
                    }
                    className="px-2"
                  />
                </figure>
              </>
            }
          />
        </section>
        <section className="col-span-1 pt-8 pb-16 md:pt-0 md:pb-0">
          <Photo />
        </section>
        <hr className="col-span-3" />
        <section className="col-span-3 overflow-hidden flex flex-row group py-8 md:py-0">
          <ParallaxTextor />
        </section>
        <hr className="col-span-3" />
        <section className="col-span-3 overflow-hidden flex flex-row group pt-8 md:pt-0">
          <Scroller />
        </section>
        <section className="col-span-3 grid gap-y-40 py-16 overflow-hidden text-justify">
          <Resume />
        </section>
      </section>
    </>
  );
};

export default Aboutpage;
