import ContactForm from "./ContactForm";

interface GetintouchProps {
  className?: string;
}
const Getintouch: React.FC<GetintouchProps> = ({ className }) => {
  return (
    <>
      <section className={className}>
        <ContactForm />
      </section>
    </>
  );
};

export default Getintouch;
