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
          className={`w-full px-3.5  md:px-24 lg:px-0 md:mx-auto md:w-[90%] lg:w-4/5 xl:max-w-screen-xl bg-gradient-to-r from-[#131316] from-40%  via-[#1d151d] to-[#131316]  rounded-xl ${className}`}
        >
          {children}
        </section>
      );
    case "section-basic":
      return (
        <section
          id={id}
          className={`w-full  md:mx-auto md:w-[90%] lg:w-4/5 xl:max-w-screen-xl rounded-xl ${className}`}
        >
          {children}
        </section>
      );
    case "section-basic-bg":
      return (
        <section
          id={id}
          className={`w-full  md:mx-auto md:w-[90%] lg:w-4/5 xl:max-w-screen-xl rounded-xl bg-gradient-to-r from-[#131316] from-40%  via-[#1d151d] to-[#131316] ${className}`}
        >
          {children}
        </section>
      );
    case "section-bento-bg":
      return (
        <section
          id={id}
          className={`w-full rounded-xl bg-gradient-to-r from-[#131316] from-40%  via-[#1d151d] to-[#131316] md:w-[90%] lg:w-4/5 xl:w-full xl:w-5/5 m-auto ${className}`}
        >
          {children}
        </section>
      );
    case "section-bento":
      return (
        <section
          id={id}
          className={`w-full rounded-xl md:w-[90%] lg:w-4/5 xl:w-5/5 m-auto ${className}`}
        >
          {children}
        </section>
      );
  }
};

export default Containers;
