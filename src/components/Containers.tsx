import { ContainersProps } from "../types/types";

const Containers: React.FC<ContainersProps> = ({
  id,
  className,
  type,
  children,
}) => {
  switch (type) {
    case "section-large":
      return (
        <section
          id={id}
          className={`w-full px-3.5  md:px-24 lg:px-0 lg:mx-auto lg:w-4/5 xl:max-w-screen-xl ${className}`}
        >
          {children}
        </section>
      );
  }
};

export default Containers;
