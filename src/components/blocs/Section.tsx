interface SectionProps {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={`md:w-4/5 md:m-auto flex flex-col gap-y-12 md:border-[1px] md:border-zinc-700 md:py-24 md:px-16 py-16 px-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
