interface FigureProps {
  src: string;
  alt: string;
  figcaption?: string;
}

const Figure: React.FC<FigureProps> = ({ src, alt, figcaption }) => (
  <figure>
    <img src={src} alt={alt} />
    <figcaption>{figcaption}</figcaption>
  </figure>
);

export { Figure };
