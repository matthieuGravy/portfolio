import Heading from "./Heading";
import ContactForm from "./ContactForm";

const Landing = () => {
  return (
    <header className="md:w-4/5 md:m-auto grid lg:grid-cols-2 gap-y-8  ">
      <section className="">
        <Heading title="Développeur web" level="h1" className="" />
        <Heading title="Spécialisé en front-end" level="h3" className="" />
      </section>
      <section className="">
        <ContactForm />
      </section>
    </header>
  );
};

export default Landing;
