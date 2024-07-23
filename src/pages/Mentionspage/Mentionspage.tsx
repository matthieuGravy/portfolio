import Heading from "../../components/blocs/Heading";
import { BlocCenter, Ol, Li } from "../../components/blocs/Lawbloc";
import { mentionEn, titleEn } from "../../data/en/mentionEn";

const Mensionspage = () => {
  return (
    <>
      <BlocCenter>
        <Heading title={titleEn} level="h3" className="pb-4" />
        <hr />
        <Ol>
          {mentionEn.map((mention) => (
            <Li
              key={mention.id}
              titre={mention.title}
              paragraphe={mention.content}
            />
          ))}
        </Ol>
      </BlocCenter>
    </>
  );
};

export default Mensionspage;
