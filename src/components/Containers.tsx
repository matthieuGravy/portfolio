interface ContainersProps {
  id?: string;
  className?: string;
  type: "section-large" | "jumbo-vertical";
  children: React.ReactNode;
  childrentwo?: React.ReactNode;
}

const Containers: React.FC<ContainersProps> = ({
  id,
  className,
  type,
  children,
  childrentwo,
}) => {
  switch (type) {
    case "section-large":
      return (
        <section
          id={id}
          className={`py-24 px-2 md:w-4/5 md:m-auto max-w-[1600px] lg:px-0 ${className}`}
        >
          {children}
        </section>
      );
    case "jumbo-vertical":
      return (
        <section
          id={id}
          className={`px-2 md:w-4/5 md:m-auto max-w-[1600px] lg:px-0 flex flex-col gap-y-8 ${className}`}
        >
          {children}
          {childrentwo}
        </section>
      );
  }
};

export default Containers;
