import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";

const Aboutpage = () => {
  return (
    <>
      <Containers type="section-large" className="flex flex-col gap-y-12 pt-36">
        <Heading
          title="About"
          level="h2"
          className="lg:w-1/2 text-center md:text-start"
        />
        <p>En 2013, je suis agent de gardiennage.</p>
      </Containers>
    </>
  );
};

export default Aboutpage;
