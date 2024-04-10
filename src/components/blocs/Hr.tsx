interface HrProps {
  className?: string;
}

const Hr: React.FC<HrProps> = (className) => {
  return <hr className={`border-zinc-200 ${className}`} />;
};

export default Hr;
