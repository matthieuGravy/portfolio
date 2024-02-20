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
          Logo des tech utilisé
          <section>
            <Html />
            <Css />
            <Sass />
            <Javascript />
            <Typescript />
            <Reactjs />
            <Vue />
            <Nodejs />
            <Mongo />
            <Git />
            <Vscode />
            <Bash />
            <Bootstrap />
            <Tailwind />
          </section>
        </section>
        <section className="bg-red-400 col-span-2">Projects</section>
        <section className="bg-red-600 ">Exp</section>
        <section className="bg-red-700">Formation</section>
      </section>
    </>
  );
};

export default Aboutpage;
