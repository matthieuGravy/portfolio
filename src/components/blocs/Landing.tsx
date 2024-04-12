import Heading from "./Heading";
import ContactForm from "./ContactForm";

const Landing = () => {
  return (
    <article className="md:w-4/5 md:m-auto grid grid-rows xl:grid-cols-2 gap-y-8">
      <section className="row-start-2 xl:row-start-1 px-2 xl:px-0">
        <Heading title="Web developer" level="h1" className="" />
        <Heading title="Specialized in front-end" level="h3" className="" />
      </section>
      <section className="">
        <ContactForm />
      </section>
    </article>
  );
};

export default Landing;
