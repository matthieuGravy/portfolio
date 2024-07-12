//import { useState } from "react";
import { motion } from "framer-motion";

import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";
import about from "../../data/en/about.ts";
import Main from "../../components/Main";

const Aboutpage = () => {
  const styleP = "text-2xl tracking-widest font-sintony ";
  return (
    <>
      <Main>
        <section className="">
          <div className="h-screen relative">
            <motion.section
              className="h-screen flex flex-col  justify-center items-center absolute z-30"
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.p
                className={`bg-red-200  w-2/3  ${styleP}`}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {about.description[0]}
              </motion.p>
              <motion.ul className="grid grid-cols-2 grid-flow-row  bg-red-400 w-2/3  ">
                <>
                  {about.values.map((value) => (
                    <li key={value.id} className="relative">
                      {value}
                    </li>
                  ))}
                </>
              </motion.ul>
              <p className={`bg-red-200  w-2/3  ${styleP}`}>
                {about.description[1]}
              </p>
            </motion.section>
          </div>
        </section>

        <Containers type="section-large" className="min-h-screen py-24">
          <section>
            <Heading title={about.titleLearning} level="h3" />
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
      </Main>
    </>
  );
};

export default Aboutpage;
