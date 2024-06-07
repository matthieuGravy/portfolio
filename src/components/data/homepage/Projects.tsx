interface ProjetUpEnprops {
  className: string;
}
interface ProjetDownEnprops {
  className: string;
}

const ProjetUpEn: React.FC<ProjetUpEnprops> = ({ className }) => {
  const strong = "text-teal-400";
  return (
    <p className={className}>
      These projects include initial{" "}
      <strong className={strong}>test projects</strong> aimed at helping me
      understand various technologies. They are currently being refined to
      present more elegant solutions.
    </p>
  );
};

const ProjetDownEn: React.FC<ProjetDownEnprops> = ({ className }) => {
  const strong = "text-teal-400";
  return (
    <p className={` ${className}`}>
      In addition, these projects also showcase the results of my{" "}
      <strong className={strong}>professional experiences</strong>. I am proud
      of them and excited to share them with you.
    </p>
  );
};

export { ProjetUpEn, ProjetDownEn };
