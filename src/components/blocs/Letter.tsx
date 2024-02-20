interface LetterProps {
  children: React.ReactNode;
}

const Letter: React.FC<LetterProps> = ({ children }) => {
  return <>{children}</>;
};

export default Letter;
