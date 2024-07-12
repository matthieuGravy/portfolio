interface ProjetUpEnprops {
  className: string;
}
interface ProjetDownEnprops {
  className: string;
}

const ProjetUpEn: React.FC<ProjetUpEnprops> = ({ className }) => {
  const strong = "bg-zinc-900 text-yellow-400";
  return (
    <p className={className}>
      These projects include initial{" "}
      <mark className={strong}>test projects</mark> aimed at helping me
      understand various technologies. They are currently being refined to
      present more elegant solutions.
    </p>
  );
};

const ProjetDownEn: React.FC<ProjetDownEnprops> = ({ className }) => {
  const strong = "bg-zinc-900 text-yellow-400";
  return (
    <p className={` ${className}`}>
      In addition, these projects also showcase the results of my{" "}
      <mark className={strong}>professional experiences</mark>. I am proud of
      them and excited to share them with you.
    </p>
  );
};

export { ProjetUpEn, ProjetDownEn };
