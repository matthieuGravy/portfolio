import { Buttonext } from "./blocs/Buttons";

import { GrGithub, GrLinkedinOption } from "react-icons/gr";

const Socials = () => {
  const classname =
    "hover:scale-90 transition-transform duration-500 ease-in-out";
  return (
    <figure className="flex flex-col gap-y-4 bg-red-100 fixed mt-6 z-50 px-2 py-4 ">
      <Buttonext
        link="https://www.linkedin.com/in/matthieuGravy"
        title="Linkedin"
        className="flex flex-row justify-start rounded-lg"
        content={
          <>
            <figure className="hover:shadow-2xl transition-all duration-500 hover:bg-fuchsia-700 rounded-full p-2">
              <GrLinkedinOption
                size={24}
                color="#e4e4e7"
                className={classname}
              />
            </figure>
          </>
        }
      />
      <Buttonext
        link="https://wwww.github.com/matthieuGravy"
        title="Github"
        className="flex flex-row items-center"
        content={
          <>
            <figure className="hover:shadow-2xl transition-all duration-500 hover:bg-fuchsia-700 rounded-full p-2">
              <GrGithub size={24} color="#e4e4e7" className={classname} />
            </figure>
          </>
        }
      />
    </figure>
  );
};

export default Socials;
