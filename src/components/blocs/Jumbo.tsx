import Heading from "./Heading";
import Hr from "./Hr";
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

interface JumboPrincipalProps {
  children?: React.ReactNode | JSX.Element;
  title: string | JSX.Element;
}
const JumboPrincipal: React.FC<JumboPrincipalProps> = ({ title, children }) => {
  return (
    <>
      <section className="py-24 flex flex-col gap-y-8 xl:w-4/5 xl:m-auto border-[1px] border-zinc-700 py-24 px-16">
        <Heading
          title={title}
          level="h1"
          className="md:text-7xl text-5xl font-extralight uppercase tracking-wide"
        />
        <Hr />
        <>{children}</>
      </section>
    </>
  );
};

export { Jumbo, JumboPrincipal };
