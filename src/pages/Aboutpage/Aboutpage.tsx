import Photo from "../../components/blocs/Photo";
import Article from "../../components/blocs/Article";
import Ads from "../../components/blocs/Ads";
import Heading from "../../components/blocs/Heading";
import { Buttonext } from "../../components/blocs/Buttons";
import GithubIcon from "../../components/icons/GithubIcon";
import Paragraphe from "../../components/blocs/Paragraphe";
import {
  Css,
  Sass,
  Html,
  Bash,
  Bootstrap,
  Git,
  Javascript,
  Mongo,
  Nodejs,
  Reactjs,
  Tailwind,
  Typescript,
  Vscode,
  Vue,
} from "../../components/gallery/Tech";

import { PorjectCard } from "../../components/blocs/Project";

const Aboutpage = () => {
  return (
    <>
      <section className="grid grid-cols-2">
        <section className="w-56 ">
          <Article
            children1={
              <Article
                children1={<Photo />}
                children2={
                  <Article
                    children1={
                      <Heading
                        level="h2"
                        className="text-3xl text-center uppercase w-56"
                        title="Matthieu Gravy"
                      />
                    }
                    children2={
                      <Paragraphe
                        children={"Développer web"}
                        className="text-center"
                      />
                    }
                  ></Article>
                }
              />
            }
            children2={
              <Ads
                children={
                  <Buttonext content={<GithubIcon />} link="" title="github" />
                }
              />
            }
          />
        </section>
        <section className="bg-red-200">zone de text</section>
        <section className="bg-red-300 col-span-2">
          <ul className="flex flex-row align-center">
            <li>
              <Html />
            </li>
            <li>
              <Css />
            </li>
            <li>
              <Sass />
            </li>
            <li>
              <Bootstrap />
            </li>
            <li>
              <Tailwind />
            </li>
            <li>
              <Javascript />
            </li>
            <li>
              <Typescript />
            </li>
            <li>
              <Reactjs />
            </li>
            <li>
              <Vue />
            </li>
            <li>
              <Nodejs />
            </li>
            <li>
              <Mongo />
            </li>
            <li>
              <Git />
            </li>
            <li>
              {" "}
              <Vscode />
            </li>
            <li>
              <Bash />
            </li>
          </ul>
        </section>
        <section className="bg-red-400 col-span-2 grid grid-cols-2">
          <PorjectCard
            id="1"
            src="https://via.placeholder.com/150"
            name="projet 1"
          />
          <PorjectCard
            id="2"
            src="https://via.placeholder.com/150"
            name="projet 2"
          />
          <PorjectCard
            id="3"
            src="https://via.placeholder.com/150"
            name="projet 3"
          />
          <PorjectCard
            id="4"
            src="https://via.placeholder.com/150"
            name="projet 4"
          />
        </section>
        <section className="bg-red-600 ">Exp</section>
        <section className="bg-red-700">Formation</section>
      </section>
    </>
  );
};

export default Aboutpage;
