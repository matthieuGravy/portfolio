import Heading from "../../components/blocs/Heading";
import { BlocCenter, Ol, Li } from "../../components/blocs/Lawbloc";
import { rgpdEn, titleEn } from "../../data/en/rgpdEn";

const Rgpdpage = () => {
  return (
    <>
      <BlocCenter>
        <Heading title={titleEn} level="h2" className="pb-4" />
        <hr />
        <Ol>
          {rgpdEn.map((rgpd) => (
            <Li key={rgpd.id} titre={rgpd.title} paragraphe={rgpd.content} />
          ))}
        </Ol>
      </BlocCenter>
    </>
  );
};

export default Rgpdpage;
