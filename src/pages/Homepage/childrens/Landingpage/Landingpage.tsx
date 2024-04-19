import Photo from "../../../components/blocs/Photo";
import Scroller from "../../../components/blocs/Scroller";
import { ButtonOne } from "../../../components/blocs/Buttons";

const Landingpage = () => {
  return (
    <>
      <section className="px-2 md:w-4/5 md:m-auto lg:px-0 lg:grid lg:grid-cols-2 gap-x-8">
        <article className="flex flex-col justify-center w-4/5 pb-8 m-auto text-center lg:pb-0 lg:text-left lg:margin-0">
          <Heading
            title={
              <>
                I'm <br />
                Matthieu <br />
                Gravy
              </>
            }
            level="h1"
            className="text-4xl lg:text-5xl"
          />
          <p className="text-2xl tracking-widest text-center lg:text-left">
            A web developer capable of creating web projects quickly and easily.
          </p>
          <section className="pb-8 pt-4">
            <ButtonOne content="more" to="/about" />
          </section>
        </article>
        <figure>
          <Photo />
        </figure>
      </section>
      <article className="flex flex-row overflow-hidden group">
        <Scroller />
      </article>
    </>
  );
};

export default Landingpage;
