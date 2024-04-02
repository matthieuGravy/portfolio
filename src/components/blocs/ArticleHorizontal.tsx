interface ArticleProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
  className?: string;
}

const ArticleHorizontal: React.FC<ArticleProps> = ({
  children1,
  children2,
  className,
}) => {
  return (
    <>
      <article className={` ${className}`}>
        {children1}
        {children2}
      </article>
    </>
  );
};
export default ArticleHorizontal;
