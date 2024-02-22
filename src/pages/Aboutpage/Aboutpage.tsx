import Photo from "../../components/blocs/Photo";
import Scroller from "../../components/blocs/Scroller";
import Resume from "../../components/fr/Resume";
import { PorjectCard } from "../../components/blocs/Project";
import Heading from "../../components/blocs/Heading";

const Aboutpage = () => {
  const titre = "Matthieu Gravy";
  return (
    <>
      <section className="grid grid-cols-3 gap-y-16">
        <section className="col-span-2 py-24">
          <Heading
            title={titre}
            level="h1"
            className="text-7xl font-extralight uppercase tracking-wide"
          />
          <Photo />
        </section>
        <hr className="col-span-3" />
        <section className="col-span-3 overflow-hidden flex flex-row group">
          <Scroller />
        </section>
        <section className="col-span-3 pt-16">
          <Resume />
        </section>
        <hr className="col-span-3" />

        <section className="bg-red-400 col-span-2 grid grid-cols-2">
          <PorjectCard
            id="1"
            src="https://via.placeholder.com/150"
            name="projet 1"
          />
          <PorjectCard
            id="2"
            src="https://via.placeholder.com/150"
            name="projet 2"
          />
          <PorjectCard
            id="3"
            src="https://via.placeholder.com/150"
            name="projet 3"
          />
          <PorjectCard
            id="4"
            src="https://via.placeholder.com/150"
            name="projet 4"
          />
        </section>
      </section>
    </>
  );
};

export default Aboutpage;
