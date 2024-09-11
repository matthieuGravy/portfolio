import Containers from "../../../components/Containers";
import ScrollHeading from "../../../components/animate/ScrollHeading";
import Main from "../../../components/Main";
import ListProject from "../../../components/data/ListProject";

import { content } from "../../../data/projets";
import { NavLink } from "react-router-dom";

const Projectpage = () => {
  const styleContainer =
    "grid md:grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 md:px-8 py-12 place-items-center";
  const styleHeader = "py-12 px-8";
  const section = "projects";
  return (
    <>
      <Main className="flex flex-col gap-y-12 pt-12 pb-16">
        <Containers type="section-large">
          <NavLink
            to={`/${section}/${content.shared.title}`}
            title={content.shared.title}
          >
            <ScrollHeading
              level="h4"
              title={content.shared.title}
              className={styleHeader}
            />
          </NavLink>

          <article className={`${styleContainer}`}>
            <ListProject type="shared" />
          </article>
        </Containers>

        <Containers type="section-large">
          <NavLink
            to={`/${section}/${content.learnings.title}`}
            title={content.learnings.title}
          >
            <ScrollHeading
              level="h4"
              title={content.learnings.title}
              className={styleHeader}
            />
          </NavLink>
          <article className={`${styleContainer}`}>
            <ListProject type="learning" />
          </article>
        </Containers>
        <Containers type="section-large">
          <NavLink
            to={`/${section}/${content.professionals.title}`}
            title={content.professionals.title}
          >
            <ScrollHeading
              level="h4"
              title={content.professionals.title}
              className={styleHeader}
            />
          </NavLink>
          <article className={`${styleContainer}`}>
            <ListProject type="professional" />
          </article>
        </Containers>
      </Main>
    </>
  );
};

export default Projectpage;
