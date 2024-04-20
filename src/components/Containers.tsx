const Containers = ({ className, type, children, childrentwo }) => {
  switch (type) {
    case "section-large":
      return (
        <section className={`px-2 md:w-4/5 md:m-auto lg:px-0 ${className}`}>
          {children}
        </section>
      );
    case "jumbo-vertical":
      return (
        <section
          className={`px-2 md:w-4/5 md:m-auto lg:px-0 flex flex-col gap-y-8 ${className}`}
        >
          {children}
          {childrentwo}
        </section>
      );
  }
};

export default Containers;
