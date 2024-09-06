import ListProject from "../../../../components/data/ListProject";
import Containers from "../../../../components/Containers";
import ScrollHeading from "../../../../components/animate/ScrollHeading";
import Main from "../../../../components/Main";

import { content } from "../../../../data/projets";

const Listpage = () => {
  const styleContainer =
    "grid md:grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 md:px-8 py-12 place-items-center";
  const styleHeader = "py-12 px-8";
  return (
    <>
      <Main className="flex flex-col gap-y-12 pt-12 pb-16">
        <Containers type="section-large">
          <ScrollHeading
            level="h4"
            title={content.learnings.title}
            className={styleHeader}
          />
          <article className={`${styleContainer}`}>
            <ListProject type="professional" />
          </article>
        </Containers>
      </Main>
    </>
  );
};

export default Listpage;
