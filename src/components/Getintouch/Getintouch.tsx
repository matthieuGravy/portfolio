import ContactForm from "./ContactForm";
import triangle from "./../../assets/backgrounds/triangle-yellow.svg";

const Getintouch = () => {
  return (
    <>
      <img src={triangle} alt="" className="w-full" />
      <div className="w-full bg-yellow-200 flex justify-center">
        <ContactForm />
      </div>
    </>
  );
};

export default Getintouch;
