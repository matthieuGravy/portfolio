import Matthieu from "../../assets/Matthieu.svg";

const Photo = () => {
  return (
    <figure className="w-56 h-auto overflow-hidden bg-red-200">
      <img src={Matthieu} alt="Matthieu Gravy" />
    </figure>
  );
};

export default Photo;
