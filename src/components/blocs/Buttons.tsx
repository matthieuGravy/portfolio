import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GrSend } from "react-icons/gr";

interface ButtonOneProps {
  to: string;
  content: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  onClick?: () => void;
}

const ButtonOne: React.FC<ButtonOneProps> = ({
  to,
  content,
  onMouseEnter,
  onMouseLeave,
  className,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <NavLink
        to={to}
        className={`uppercase  flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide ${className}  ${
          isHovered
            ? "hover:bg-fuchsia-600 hover:text-zinc-900 "
            : "text-fuchsia-600"
        }`}
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
          if (onMouseEnter) {
            onMouseEnter();
          }
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (onMouseLeave) {
            onMouseLeave();
          }
        }}
      >
        <>{content}</>
      </NavLink>
    </>
  );
};

interface ButtonOneSecondaireProps {
  to: string;
  content: React.ReactNode;
  onClick?: () => void;
}
const ButtonOneSecondaire: React.FC<ButtonOneSecondaireProps> = ({
  to,
  content,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <NavLink
        onClick={onClick}
        to={to}
        className="uppercase bg-zinc-700 text-neutral-50 flex justify-center py-2 hover:border-fuchsia-700 transition-colors duration-500 hover:bg-clip-content px-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
        <span
          className={` transition-all duration-500 relative left-2 opacity-50 ${
            isHovered ? "left-6 rotate-45 opacity-100" : "rotate-0"
          }`}
        >
          <img src="" alt="" />
        </span>
      </NavLink>
    </>
  );
};

interface ButtonTwoProps {
  to: string;
  content: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  onClick?: () => void;
}

const ButtonTwo: React.FC<ButtonTwoProps> = ({
  to,
  content,
  onMouseEnter,
  onMouseLeave,
  className,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <NavLink
        to={to}
        className={`uppercase  flex justify-center py-2 transition-colors duration-500 px-2 font-cairo text-2xl tracking-wide ${className}  ${
          isHovered ? "hover:bg-teal-400 hover:text-zinc-900 " : "text-teal-400"
        }`}
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
          if (onMouseEnter) {
            onMouseEnter();
          }
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (onMouseLeave) {
            onMouseLeave();
          }
        }}
      >
        <>{content}</>
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
        className={`transition-all text-zinc-500 hover:text-fuchsia-600 ${className}"`}
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
        className={`hover:bg-fuchsia-700 hover:text-zinc-50 transition-colors duration-500 ${className}`}
      >
        <>{content}</>
      </a>
    </>
  );
};

interface ButtonCardsProps {
  to: string;
  content: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  className?: string;
}

const ButtonCards: React.FC<ButtonCardsProps> = ({
  to,
  content,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <>
      <NavLink
        to={to}
        className={`${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {content}
      </NavLink>
    </>
  );
};

interface ButtonSubmitProps {
  content: string;
  className?: string;
}
const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ content, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="submit"
      className={`overflow-hidden uppercase w-64 font-cairo text-2xl tracking-wide rounded-lg text-teal-400 flex justify-center items-center py-2 hover:bg-teal-200 hover:text-zinc-800 transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
      <span
        className={`relative duration-500 transition-all overflow-hidden ${
          isHovered ? "left-5 opacity-1" : "-left-32 opacity-0"
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
  ButtonCards,
  ButtonSubmit,
};
