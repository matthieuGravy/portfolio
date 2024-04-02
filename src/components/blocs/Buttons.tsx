import { NavLink, useMatch } from "react-router-dom";
import { useState } from "react";
import FlecheToIcon from "../icons/FlecheToIcon";
import { GrSend } from "react-icons/gr";

interface ButtonOneProps {
  to: string;
  content: React.ReactNode;
}

const ButtonOne: React.FC<ButtonOneProps> = ({ to, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <NavLink
        to={to}
        className={`uppercase bg-zinc-100 text-zinc-700 flex justify-center py-2 transition-colors duration-500 px-2   ${
          isHovered ? "hover:bg-fuchsia-700 hover:text-neutral-50 " : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <>
          {content}
          <span
            className={` transition-all duration-500 relative left-2 opacity-50 ${
              isHovered ? "left-6 rotate-45 opacity-100" : "rotate-0"
            }`}
          >
            <FlecheToIcon />
          </span>
        </>
      </NavLink>
    </>
  );
};

interface ButtonOneSecondaireProps {
  to: string;
  content: React.ReactNode;
}
const ButtonOneSecondaire: React.FC<ButtonOneSecondaireProps> = ({
  to,
  content,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <NavLink
        to={to}
        className="uppercase border-[1px] border-zinc-500 text-neutral-50 flex justify-center py-2 hover:border-fuchsia-700 transition-colors duration-500 hover:bg-clip-content px-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
        <span
          className={` transition-all duration-500 relative left-2 opacity-50 ${
            isHovered ? "left-6 rotate-45 opacity-100" : "rotate-0"
          }`}
        >
          <FlecheToIcon />
        </span>
      </NavLink>
    </>
  );
};

interface ButtonTwoProps {
  to: string;
  content: React.ReactNode;
  className?: string;
}
const ButtonTwo: React.FC<ButtonTwoProps> = ({ to, content, className }) => {
  return (
    <>
      <NavLink
        to={to}
        className={`inline-block scale-110 hover:scale-90 transition-all ${className}`}
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
        className={`transition-all ${className}"`}
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
        className={`bg-zinc-700 text-neutral-50 flex uppercase justify-center py-2 hover:bg-fuchsia-700 hover:text-neutral-50 transition-colors duration-500 ${className}`}
      >
        <>{content}</>
      </a>
    </>
  );
};

interface ButtonNavProps {
  to: string;
  content: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const ButtonNav: React.FC<ButtonNavProps> = ({
  to,
  content,
  className,
  onClick,
}) => {
  const match = useMatch(to);

  return (
    <>
      <NavLink
        to={to}
        className={`font-extralight ${className} ${match ? "opacity-75" : ""} `}
        onClick={onClick}
      >
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

interface ButtonSubmitProps {
  content: string;
}
const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="submit"
      className="uppercase w-full bg-zinc-100 text-zinc-700 flex justify-center py-2 hover:bg-fuchsia-700 hover:text-neutral-50 transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
      <span
        className={`relative -left-32 duration-500 transition-all overflow-hidden ${
          isHovered ? "left-10 opacity-1" : "opacity-0"
        }`}
      >
        <GrSend size={22} />
      </span>
    </button>
  );
};

export {
  ButtonOne,
  ButtonOneSecondaire,
  ButtonTwo,
  Buttonext,
  ButtonextTwo,
  ButtonNav,
  ButtonCards,
  ButtonSubmit,
};
