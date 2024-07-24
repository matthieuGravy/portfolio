import { MissionUpEnProps, MissionDownEnProps } from "../../../types/types";
const mark =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 to-pink-400";

const MissionUpEn: React.FC<MissionUpEnProps> = ({ className }) => {
  return (
    <p className={className}>
      I transform{" "}
      <mark className={mark}>bold ideas into digital realities</mark> using{" "}
      <mark className={mark}>React, JavaScript, and Tailwind CSS</mark>. My
      approach?{" "}
      <mark className={mark}>
        Efficient code, intuitive designs, and unwavering determination
      </mark>
      . My portfolio traces my evolution, from early projects to{" "}
      <mark className={mark}>increasingly complex achievements</mark>.
    </p>
  );
};

const MissionDownEn: React.FC<MissionDownEnProps> = ({ className }) => {
  return (
    <p className={` ${className}`}>
      Every application I develop tells a story of{" "}
      <mark className={mark}>innovation and perseverance</mark>. No pretense
      here - just a <mark className={mark}>passionate professional</mark> who{" "}
      <mark className={mark}>
        codes with precision, constantly learns, and pushes the envelope of
        what's possible
      </mark>
      .
    </p>
  );
};

export { MissionUpEn, MissionDownEn };
