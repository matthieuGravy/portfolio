import { MissionUpEnProps, MissionDownEnProps } from "../../../types/types";

const MissionUpEn: React.FC<MissionUpEnProps> = ({ className }) => {
  const strong = "bg-zinc-900 text-zinc-100";
  return (
    <p className={className}>
      Innovative web developer based in Brussels, crafting cutting-edge digital
      solutions. I transform complex ideas into sleek, user-friendly web
      experiences with <mark className={strong}>speed</mark> and{" "}
      <mark className={strong}>precision</mark>.
    </p>
  );
};
const MissionDownEn: React.FC<MissionDownEnProps> = ({ className }) => {
  const strong = "bg-zinc-900 text-zinc-100";
  return (
    <p className={` ${className}`}>
      My expertise lies in React, JavaScript, and Tailwind CSS, allowing me to
      build responsive and dynamic web applications. I bring projects to life
      with <mark className={strong}>clean code</mark> and intuitive design.
    </p>
  );
};

export { MissionUpEn, MissionDownEn };
