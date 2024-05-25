import ContactForm from "./ContactForm";
import Containers from "./../Containers";

const Getintouch = () => {
  return (
    <Containers
      type="section-large"
      className="grid grid-rows xl:grid-cols-2 gap-y-12 xl:gap-y-0 gap-x-8 xl:gap-x-16   relative place-items-center xl:place-items-between"
    >
      <ContactForm />
    </Containers>
  );
};

export default Getintouch;
