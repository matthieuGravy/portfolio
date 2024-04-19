const Containers = ({ className, type, children }) => {
  switch (type) {
    case "section-large":
      return (
        <section className={`px-2 md:w-4/5 md:m-auto lg:px-0 ${className}`}>
          {children}
        </section>
      );
  }
};

export default Containers;
