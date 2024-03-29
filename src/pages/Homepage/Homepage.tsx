import Hello from "../../components/fr/Hello";
import Heading from "../../components/blocs/Heading";
import { Jumbo, JumboPrincipal } from "../../components/blocs/Jumbo";
import InternshipIn from "../../components/fr/InternshipIn";
import InternshipOff from "../../components/fr/InternshipOff";
import Job from "../../components/fr/Job";
import Slog from "../../components/blocs/Slog";
import { ButtonTwo } from "../../components/blocs/Buttons";
import FlecheToIcon from "../../components/icons/FlecheToIcon";
import Ads from "../../components/blocs/Ads";
import Stage from "../../components/fr/Stage";
import Article from "../../components/blocs/Article";
import { Whatstage, Duree, Whyme } from "../../components/fr/AboutStage";

const Homepage = () => {
  const hstyle = "text-4xl flex justify-center text-center uppercase py-8";
  const hduree = "Modifier la durée";
  const hstage = "Le stage";
  const titre = (
    <>
      <Hello /> <br /> <Job /> <br />
      <ButtonTwo
        to="/about"
        content={<FlecheToIcon className="h-12 w-12 " />}
      />
    </>
  );

  return (
    <>
      <JumboPrincipal title={titre} />

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
      <section className="lg:grid lg:grid-cols-3 w-full md:w-2/3 lg:w-full flex flex-col gap-y-16 justify-items-center py-24 gap-x-8 m-auto">
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

export default Homepage;
