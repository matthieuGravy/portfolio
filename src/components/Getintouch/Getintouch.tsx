import Heading from "../blocs/Heading";
import ContactForm from "./ContactForm";
import Containers from "./../Containers";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { Buttonext } from "../blocs/Buttons";

const Getintouch = () => {
  const classname =
    "hover:scale-90 transition-transform duration-500 ease-in-out";
  return (
    <Containers
      type="section-large"
      className="grid grid-rows xl:grid-cols-2 gap-y-12 xl:gap-y-0 gap-x-8 xl:gap-x-16   relative place-items-center xl:place-items-between"
    >
      <section className="row-start-2 xl:row-start-1 px-2 xl:px-0">
        <Heading title="Web developer" level="h1" />
        <Heading
          title="Specialized in front-end"
          level="h3"
          className="text-fuchsia-600"
        />

        <figure className="flex gap-x-8 pt-24 justify-center ">
          <Buttonext
            link="https://www.linkedin.com/in/matthieuGravy"
            title="Linkedin"
            className="flex flex-row justify-start rounded-lg"
            content={
              <>
                <figure className="hover:shadow-2xl transition-all duration-500 hover:bg-teal-200 rounded-full p-2">
                  <GrLinkedinOption
                    size={24}
                    color="#3f3f46"
                    className={classname}
                  />
                </figure>
              </>
            }
          />
          <Buttonext
            link="https://github.com/matthieuGravy"
            title="Github"
            className="flex flex-row items-center"
            content={
              <>
                <figure className="hover:shadow-2xl transition-all duration-500 hover:bg-teal-200 rounded-full p-2">
                  <GrGithub size={24} color="#3f3f46" className={classname} />
                </figure>
              </>
            }
          />
        </figure>
      </section>
      <ContactForm />
    </Containers>
  );
};

export default Getintouch;
