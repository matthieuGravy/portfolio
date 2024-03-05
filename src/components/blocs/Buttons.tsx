import { NavLink } from "react-router-dom";

interface ButtonOneProps {
  to: string;
  content: string;
}

const ButtonOne: React.FC<ButtonOneProps> = ({ to, content }) => {
  return (
    <>
      <NavLink
        to={to}
        className="bg-neutral-100 text-zinc-800 flex justify-center py-2 hover:bg-fuchsia-700 hover:text-neutral-50 transition-colors	"
      >
        {content}
      </NavLink>
    </>
  );
};

interface ButtonTwoProps {
  to: string;
  content: React.ReactNode;
}
const ButtonTwo: React.FC<ButtonTwoProps> = ({ to, content }) => {
  return (
    <>
      <NavLink
        to={to}
        className="inline-block scale-110 hover:scale-90 transition-all"
      >
        {content}
      </NavLink>
    </>
  );
};

interface ButtonextProps {
  content: React.ReactNode;
  link: string;
  title: string;
  className?: string;
}

const Buttonext: React.FC<ButtonextProps> = ({
  content,
  link,
  title,
  className,
}) => {
  return (
    <>
      <a
        href={link}
        title={title}
        target="_blank"
        rel="noreferrer"
        className={`scale-110 hover:scale-90 transition-all ${className}"`}
      >
        {content}
      </a>
    </>
  );
};

const ButtonextTwo: React.FC<ButtonextProps> = ({
  content,
  link,
  title,
  className,
}) => {
  return (
    <>
      <a
        href={link}
        title={title}
        rel="noreferrer"
        target="_blank"
        className={`bg-neutral-100 text-zinc-800 flex justify-center py-2 hover:bg-fuchsia-700 hover:text-neutral-50 transition-colors ${className}`}
      >
        {content}
      </a>
    </>
  );
};

interface ButtonNavProps {
  to: string;
  content: React.ReactNode;
}
const ButtonNav: React.FC<ButtonNavProps> = ({ to, content }) => {
  return (
    <>
      <NavLink to={to} className="font-extralight	">
        {content}
      </NavLink>
    </>
  );
};

interface ButtonCardsProps {
  to: string;
  content: React.ReactNode;
}

const ButtonCards: React.FC<ButtonCardsProps> = ({ to, content }) => {
  return (
    <>
      <NavLink to={to} className="hover:opacity-75	">
        {content}
      </NavLink>
    </>
  );
};

export {
  ButtonOne,
  ButtonTwo,
  Buttonext,
  ButtonextTwo,
  ButtonNav,
  ButtonCards,
};
