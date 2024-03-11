import Heading from "./Heading";

interface JumboProps {
  children: React.ReactNode;
  title: string | JSX.Element;
  className?: string;
}

const Jumbo: React.FC<JumboProps> = ({ children, title, className }) => {
  return (
    <section className={className}>
      <Heading level="h2" className="text-xl" title={title}></Heading>
      <>{children}</>
    </section>
  );
};

export default Jumbo;
