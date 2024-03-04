import Matthieu from "../../components/fr/matthieu";
import Heading from "../../components/blocs/Heading";
import Jumbo from "../../components/blocs/Jumbo";
import Maintech from "../../components/fr/maintech";
import InternshipIn from "../../components/fr/internshipIn";
import InternshipOff from "../../components/fr/internshipOff";
import Job from "../../components/fr/job";
import Slog from "../../components/blocs/slog";
import {
  ButtonOne,
  ButtonTwo,
  Buttonext,
} from "../../components/blocs/Buttons";
import FlecheToIcon from "../../components/icons/FlechetoIcon";
import FlecheRightIcon from "../../components/icons/FlecheRightIcon";
import Showcode from "../../components/fr/Showcode";
import Ads from "../../components/blocs/Ads";
import Paragraphe from "../../components/blocs/Paragraphe";
import Stage from "../../components/fr/stage";

const Homepage = () => {
  const showcode = <Showcode />;
  const titre = (
    <>
      <Matthieu /> <br /> <Job /> <br />
      <ButtonTwo to="/about" content={<FlecheToIcon />} />
    </>
  );

  return (
    <>
      <article className="flex flex-col justify-between  min-h-[90vh]">
        <section className="py-24 flex flex-row justify-between">
          <Heading
            title={titre}
            level="h1"
            className="text-7xl font-extralight uppercase tracking-wide"
          />
        </section>
        <hr />
        <article className="flex flex-row justify-between w-full py-16">
          <section className="flex flex-row items-end gap-x-8">
            <Maintech />
            <Paragraphe children={showcode} />

            <Buttonext
              content={<FlecheRightIcon />}
              link="https://github.com/matthieuGravy/portfolio"
            />
          </section>
          <Jumbo
            title={
              <>
                <Ads children={<Stage />} />
              </>
            }
            children={
              <article className="flex flex-col gap-y-4 justify-end	">
                <Slog
                  classNameContainer="flex flex-col gap-y-4 justify-end"
                  data1={<InternshipIn />}
                  string="au"
                  data2={<InternshipOff />}
                />
                <ButtonOne content="infos" to="/internship" />
              </article>
            }
            className="flex flex-row-reverse gap-x-8 text-center uppercase tracking-widest"
          ></Jumbo>
        </article>
      </article>
    </>
  );
};

export default Homepage;
