import { MissionUpEnProps, MissionDownEnProps } from "../../../types/types";

const MissionUpEn: React.FC<MissionUpEnProps> = ({ className }) => {
  const strong = "text-teal-400";
  return (
    <p className={className}>
      A web developer based in Brussels, specializing in modern web
      technologies. I am capable of creating web projects{" "}
      <mark className={strong}>quickly</mark> and{" "}
      <mark className={strong}>easily</mark>.
    </p>
  );
};
const MissionDownEn: React.FC<MissionDownEnProps> = ({ className }) => {
  const strong = "text-teal-400";
  return (
    <p className={` ${className}`}>
      I <mark className={strong}>specialize</mark> in React, Javascript, and
      Tailwind CSS. I also have <mark className={strong}>experience</mark> with
      Typescript, Vue.js, Node.js, Express, and MongoDB.
    </p>
  );
};

export { MissionUpEn, MissionDownEn };
