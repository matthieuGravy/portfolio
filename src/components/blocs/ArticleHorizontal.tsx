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
      <article
        className={`grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-x-8 py-12 md:py-24 py-16 px-8 gap-y-8 justify-between md:w-4/5 md:m-auto ${className}`}
      >
        {children1}
        {children2}
      </article>
    </>
  );
};
export default ArticleHorizontal;
