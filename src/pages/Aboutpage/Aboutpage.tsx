import ParallaxTextor from "../../components/blocs/ParallaxTextor";

const Aboutpage = () => {
  const titre = <>Matthieu</>;

  return (
    <>
      <section className="h-[100vh] flex flex-col justify-center relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rotate-45">
          <div className="w-full h-full relative">
            <div className="grid w-full h-full grid-cols-2 grid-rows-2">
              <div className="bg-zinc-800"></div>
              <div className="bg-yellow-200"></div>
              <div className="bg-yellow-200"></div>
              <div className="bg-zinc-800"></div>
            </div>
          </div>
        </div>
        <ParallaxTextor />
      </section>
    </>
  );
};

export default Aboutpage;
