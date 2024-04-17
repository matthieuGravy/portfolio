import MatthieuGravyDeveloperWeb from "../../assets/matthieu-gravy-developer-web.svg";

interface PhotoProps {
  className?: string;
}

const Photo: React.FC<PhotoProps> = ({ className }) => {
  return (
    <div className="relative">
      <figure className={`h-auto overflow-hidden opacity-60 ${className} z-0`}>
        <img src={MatthieuGravyDeveloperWeb} alt="Matthieu Gravy" />
      </figure>
    </div>
  );
};

export default Photo;
