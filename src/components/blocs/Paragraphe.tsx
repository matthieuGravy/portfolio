interface ParagrapheProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraphe: React.FC<ParagrapheProps> = ({ children, className }) => {
  return <p className={` ${className}`}>{children}</p>;
};

export default Paragraphe;
