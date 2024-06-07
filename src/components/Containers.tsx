import { ContainersProps } from "../types/types";

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
          className={`w-full px-3.5  md:px-24 lg:px-0 lg:m-auto lg:w-4/5 xl:max-w-screen-xl ${className}`}
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
