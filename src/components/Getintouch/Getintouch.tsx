import Heading from "../blocs/Heading";
import ContactForm from "./ContactForm";
import Containers from "./../Containers";

const Getintouch = () => {
  return (
    <Containers
      type="section-large"
      className="grid grid-rows xl:grid-cols-2 gap-y-8 gap-x-8 xl:gap-x-16 xl:gap-y-0 relative"
    >
      <section className="row-start-2 xl:row-start-1 px-2 xl:px-0">
        <Heading title="Web developer" level="h1" />
        <Heading
          title="Specialized in front-end"
          level="h3"
          className="text-fuchsia-700"
        />
      </section>
      <ContactForm />
    </Containers>
  );
};

export default Getintouch;
