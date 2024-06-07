import Heading from "./Heading";
import Paragraphe from "./Paragraphe";
import { BlocCenterProps, OlProps, LiProps } from "../../types/types";

const BlocCenter: React.FC<BlocCenterProps> = ({ children }) => {
  return <article className="lg:w-2/3 m-auto py-24">{children}</article>;
};

const Ol: React.FC<OlProps> = ({ children }) => {
  return <ol className="flex flex-col gap-y-8 py-16">{children}</ol>;
};

const Li: React.FC<LiProps> = ({ paragraphe, titre }) => {
  return (
    <>
      <li className="space-y-2">
        <Heading level="h4" title={titre} className="" />
        <Paragraphe
          children={paragraphe}
          className="text-xl tracking-widest font-sintony"
        />
      </li>
    </>
  );
};
export { BlocCenter, Ol, Li };
