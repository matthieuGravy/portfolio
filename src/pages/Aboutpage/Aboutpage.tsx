//import { useState } from "react";
import Containers from "../../components/Containers";
import Heading from "../../components/blocs/Heading";
//import { carouselArray } from "../../data/about";

const Aboutpage = () => {
  // const [selectedYear, setSelectedYear] = useState("");

  // const handleYearClick = (year: string) => {setSelectedYear(year);};

  return (
    <>
      <Containers
        type="section-large"
        className="min-h-screen flex flex-col gap-y-12 pt-36"
      >
        <Heading
          title="About"
          level="h2"
          className="text-center md:text-start"
        />
        <p>This page is under development.</p>

        {/*
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
        */}
      </Containers>
    </>
  );
};

export default Aboutpage;
