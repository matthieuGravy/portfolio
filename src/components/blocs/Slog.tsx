interface SlogProps {
  data1: React.ReactNode;
  data2: React.ReactNode;
  string: React.ReactNode;
  classNameData1?: string;
  classNameString?: string;
  classNameData2?: string;
  classNameContainer?: string;
}

const Slog: React.FC<SlogProps> = ({
  data1,
  data2,
  string,
  classNameData1,
  classNameString,
  classNameData2,
  classNameContainer,
}) => {
  return (
    <article className={classNameContainer}>
      <p className={classNameData1}>{data1}</p>
      <p className={classNameString}>{string} </p>
      <p className={classNameData2}>{data2}</p>
    </article>
  );
};

export default Slog;
