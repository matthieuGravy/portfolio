interface ArticleProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ children1, children2 }) => {
  return (
    <article className="flex flex-col gap-y-8">
      {children1}
      {children2}
    </article>
  );
};
export default Article;
