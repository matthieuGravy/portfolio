interface ArticleProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({
  children1,
  children2,
  className,
}) => {
  return (
    <article className={`flex flex-row  ${className}`}>
      {children1}
      {children2}
    </article>
  );
};
export default Article;
