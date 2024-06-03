import { useState } from "react";
import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";
import { carouselArray } from "../../data/about";

const Aboutpage = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <>
      <Containers type="section-large" className="flex flex-col gap-y-12 pt-36">
        <Heading
          title="About"
          level="h2"
          className="lg:w-1/2 text-center md:text-start"
        />
        <article>
          <p>
            Ce qui est vraiment important pour moi, c'est d'évoluer dans un
            environnement stimulant. J'aime apprendre, comprendre et partager
            mes connaissances.
          </p>
          <p>
            J'ai remarqué que le travail en groupe peut parfois ralentir ma
            vitesse de production. Cependant, il me permet de m'améliorer
            constamment, car l'environnement collaboratif me pousse à me
            comparer, à me dépasser, et surtout à apprendre des meilleurs.
          </p>
        </article>

        <article>my personality : architect</article>
        <article>
          <h2>Mes Objectifs d'Apprentissage </h2>
          <h3>en Technologie</h3>
          <ul>
            <li>
              <strong>Next.js, Turbo, and Vercel</strong>
              <p>
                I recently discovered Turbo, and its documentation has inspired
                me to try everything: React with Remix, Next.js, and more. I've
                decided to start a project with it in June.
              </p>
            </li>
            <li>
              <strong>Vue with Vuetify</strong>
              <p>
                I've found that I can help others, even in a limited capacity,
                to create projects when they start developing and to understand
                tools. Hearing a developer tell me months later, "I'm really
                glad I did this project with you, it's still useful to me now!"
                motivates me to create content through a blog. I think Vue is
                ideal for this purpose.
              </p>
            </li>
            <li>
              <strong>The World of Python and AI</strong>
              <p>
                As a third step, I want to learn more about Python. A few months
                ago, I discovered Django without really knowing Python in depth.
                I enjoyed the dynamism it brings. Why not go further with tools
                like Pandas, for example?
              </p>
            </li>
          </ul>

          <h3>en Soft Skills</h3>
          <ul>
            <li>
              <strong>Languages</strong>
              <p>
                I used to think that having a low level of technical English
                would be a barrier in IT because resources are often in English.
                However, error codes and documentation are quite similar across
                languages. But communicating verbally, especially understanding
                different accents, is still challenging and can be a barrier to
                effective communication. That's why I'm committed to improving
                my English skills.
              </p>
            </li>
          </ul>
        </article>

        <article>
          <nav>
            <ul className="flex space-x-8">
              {carouselArray.map((item) => (
                <li key={item.id} className="flex flex-col gap-y-4">
                  <button onClick={() => handleYearClick(item.year)}>
                    {item.year}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <article>
            {selectedYear && (
              <>
                <h3>
                  {
                    carouselArray.find((item) => item.year === selectedYear)
                      ?.title
                  }
                </h3>
                <p>
                  {
                    carouselArray.find((item) => item.year === selectedYear)
                      ?.description
                  }
                </p>
              </>
            )}
          </article>
        </article>
      </Containers>
    </>
  );
};

export default Aboutpage;
