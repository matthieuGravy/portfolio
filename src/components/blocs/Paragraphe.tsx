interface ParagrapheProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraphe: React.FC<ParagrapheProps> = ({ children, className }) => {
  return <p className={`uppercase font-light ${className}`}>{children}</p>;
};

export default Paragraphe;
