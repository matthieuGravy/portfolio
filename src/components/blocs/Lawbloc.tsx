import Heading from "./Heading";

interface BlocCenterProps {
  children: React.ReactNode;
}

const BlocCenter: React.FC<BlocCenterProps> = ({ children }) => {
  return <article className="lg:w-2/3 m-auto">{children}</article>;
};

interface OlProps {
  children: React.ReactNode;
}
const Ol: React.FC<OlProps> = ({ children }) => {
  return <ol className="flex flex-col gap-y-8 py-8">{children}</ol>;
};

interface LiProps {
  paragraphe: React.ReactNode;
  titre: string;
}
const Li: React.FC<LiProps> = ({ paragraphe, titre }) => {
  return (
    <>
      <li>
        <Heading
          level="h2"
          title={titre}
          className="text-3xl font-extralight uppercase tracking-wide pb-2"
        />
        <p>{paragraphe}</p>
      </li>
    </>
  );
};
export { BlocCenter, Ol, Li };
