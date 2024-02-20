import Jumbo from "../../components/blocs/Jumbo";
import InternshipIn from "../../components/fr/internshipIn";
import InternshipOff from "../../components/fr/internshipOff";
import Slog from "../../components/blocs/slog";
import Ads from "../../components/blocs/Ads";
import Stage from "../../components/fr/stage";
import Whyme from "../../components/fr/Whyme";
import Heading from "../../components/blocs/Heading";
import Article from "../../components/blocs/Article";
import Duree from "../../components/fr/Duree";
import Whatstage from "../../components/fr/Whatstage";

const Internshippage = () => {
  const hstyle = "text-3xl flex justify-center text-center uppercase";
  const hduree = "Modifier la durée";
  const hstage = "Un stage ?";
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
            classNameContainer="flex flex-col gap-y-4 justify-end	"
            data1={<InternshipIn />}
            classNameData1="text-8xl"
            string="au"
            data2={<InternshipOff />}
            classNameData2="text-8xl"
          />
        }
      ></Jumbo>
      <section className="grid grid-cols-3 justify-items-center py-24 gap-x-8	">
        <Article
          children1={
            <Ads
              children={
                <Heading level="h2" className={hstyle} title={hstage} />
              }
            />
          }
          children2={<Whatstage />}
        ></Article>
        <Article
          children1={
            <Ads
              children={
                <Heading level="h2" className={hstyle} title="Le bon choix" />
              }
            />
          }
          children2={<Whyme />}
        ></Article>
        <Article
          children1={
            <Ads
              children={
                <Heading level="h2" className={hstyle} title={hduree} />
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
