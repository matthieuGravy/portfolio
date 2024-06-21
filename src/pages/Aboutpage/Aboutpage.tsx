//import { useState } from "react";
import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";
import about from "../../data/en/about.ts";

const Aboutpage = () => {
  const styleP = "text-2xl tracking-widest font-sintony ";
  return (
    <>
      <Containers type="section-large" className="min-h-screen py-24">
        <p className={styleP}>{about.description}</p>
        <section>
          <Heading
            title={about.titleValue}
            level="h3"
            className="text-center md:text-start"
          />
          <ul className="grid grid-cols-2">
            {about.value.map((value) => (
              <li key={value.id}>
                <Heading title={value.title} level="h5" />
                <p className={styleP}>{value.content}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Heading title="Objectif Learning" level="h3" />
          <ul>
            {about.objectifLearning.map((objectif) => (
              <li key={objectif.id}>
                <Heading title={objectif.title} level="h5" />
                <p className={styleP}>{objectif.content}</p>
              </li>
            ))}
          </ul>
        </section>
      </Containers>
    </>
  );
};

export default Aboutpage;
