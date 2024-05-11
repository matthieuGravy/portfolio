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
            Ce qui est vraiment important pour moi c'est des êtres dans un
            environnement challengeant. J'aime apprendre, je suis curieux et je
            veux toujours aller plus loin.
          </p>
          <p>
            Quand je regarde mon parcours, je sais à quel point j'ai changé.
            J'étais celui qui ne voulait absoluement rien faire et je suis
            devenu le gars qui à du mal à s'arreter de travailler.
          </p>
          <p>
            Le code c'est vraiment quelque chsoe que j'aime car je peux toujours
            l'optimisiser.
          </p>
          <p>
            A côté de ça, je suis un vrai revenchard. Je ne laisse pas les gens
            me dire là où je devrais être. Je choisis où je veux aller.
          </p>
        </article>

        <article>
          <section></section>
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
                  {" "}
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
