import Jumbo from "../../components/blocs/Jumbo";
import InternshipIn from "../../components/fr/internshipIn";
import InternshipOff from "../../components/fr/internshipOff";
import Slog from "../../components/blocs/slog";
import Ads from "../../components/blocs/Ads";
import Stage from "../../components/fr/stage";

import Heading from "../../components/blocs/Heading";
import Article from "../../components/blocs/Article";

import { Whatstage, Duree, Whyme } from "../../components/fr/AboutStage";

const Internshippage = () => {
  const hstyle = "text-4xl flex justify-center text-center uppercase py-8";
  const hduree = "Modifier la durée";
  const hstage = "Le stage";
  return (
    <>
      <Jumbo
        title={
          <>
            <Ads children={<Stage />} />
          </>
        }
        className="flex flex-row justify-between text-center uppercase tracking-widest py-24 "
        children={
          <Slog
            classNameContainer="flex flex-col gap-y-4 md:justify-end	justify-center"
            data1={<InternshipIn />}
            classNameData1="md:text-7xl text-3xl font-extralight uppercase tracking-wide"
            string="au"
            data2={<InternshipOff />}
            classNameData2="md:text-7xl text-3xl font-extralight uppercase tracking-wide"
          />
        }
      ></Jumbo>
      <hr />
      <section className="md:grid md:grid-cols-3 flex flex-col gap-y-16 justify-items-center py-24 gap-x-8	xl:w-3/4 m-auto">
        <Article
          children1={
            <Ads
              children={
                <>
                  <Heading level="h2" className={hstyle} title={hstage} />
                  <hr />
                </>
              }
            />
          }
          children2={<Whatstage />}
        ></Article>
        <Article
          children1={
            <Ads
              children={
                <>
                  <Heading level="h2" className={hstyle} title="Le bon choix" />
                  <hr />
                </>
              }
            />
          }
          children2={<Whyme />}
        ></Article>
        <Article
          children1={
            <Ads
              children={
                <>
                  <Heading level="h2" className={hstyle} title={hduree} />
                  <hr />
                </>
              }
            />
          }
          children2={<Duree />}
        ></Article>
      </section>
    </>
  );
};

export default Internshippage;
