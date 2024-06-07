import { MissionUpEnProps, MissionDownEnProps } from "../../../types/types";

const MissionUpEn: React.FC<MissionUpEnProps> = ({ className }) => {
  const strong = "text-teal-400";
  return (
    <p className={className}>
      A web developer based in Brussels, specializing in modern web
      technologies. I am capable of creating web projects{" "}
      <strong className={strong}>quickly</strong> and{" "}
      <strong className={strong}>easily</strong>.
    </p>
  );
};
const MissionDownEn: React.FC<MissionDownEnProps> = ({ className }) => {
  const strong = "text-teal-400";
  return (
    <p className={` ${className}`}>
      I <strong className={strong}>specialize</strong> in React, Javascript, and
      Tailwind CSS. I also have <strong className={strong}>experience</strong>{" "}
      with Typescript, Vue.js, Node.js, Express, and MongoDB.
    </p>
  );
};

export { MissionUpEn, MissionDownEn };
