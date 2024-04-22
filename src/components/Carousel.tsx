import { useEffect, useState } from "react";

import { CircleButton } from "./Buttons";
import { CorpsClass } from "./Corps";
import Lioness from "./../../assets/lioness.png";
import Drawing from "./../../assets/drawing.png";
import Order from "./../../assets/order.png";
import Shirt from "./../../assets/t-shirt.png";

/**
 * Carousel component that displays a series of images.
 *
 * @param {Object} props - The props object.
 * @param {string} props.className - Additional CSS classes to be applied to the carousel.
 * @returns {JSX.Element} The Carousel component.
 */
const Carousel = ({ className }) => {
  const images = [
    {
      src: Lioness,
      comment: "the lioness",
    },
    {
      src: Drawing,
      comment: "The first drawing",
    },
    {
      src: Order,
      comment: "The first order",
    },
    {
      src: Shirt,
      comment: "The first t-shirt",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [delay, setDelay] = useState(4000);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className={`w-4/5 m-auto ${className}`}>
        <figure className="relative overflow-hidden rounded-lg h-[400px] xl:h-[300px]  shadow-xl ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.comment}
              className={`absolute w-full h-full object-cover transition-opacity rounded-lg duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </figure>
        <section className="grid grid-cols-4 w-3/4 m-auto p-2">
          <div className="grid place-items-center ">
            <CircleButton
              title={images[0].comment}
              className={`hover:bg-[#FBECD4] ${
                activeIndex === 0 ? "bg-[#FBECD4]" : "bg-white"
              }`}
              onClick={() => {
                setActiveIndex(0);
                clearInterval();
                setDelay(4000);
              }}
            />
          </div>
          <div className="grid place-items-center">
            <CircleButton
              title={images[1].comment}
              className={`hover:bg-[#FBECD4] ${
                activeIndex === 1 ? "bg-[#FBECD4]" : "bg-white"
              }`}
              onClick={() => {
                setActiveIndex(1);
                clearInterval();
                setDelay(4000);
              }}
            />
          </div>
          <div className="grid place-items-center">
            <CircleButton
              title={images[2].comment}
              className={`hover:bg-[#FBECD4] ${
                activeIndex === 2 ? "bg-[#FBECD4]" : "bg-white"
              }`}
              onClick={() => {
                setActiveIndex(2);
                clearInterval();
                setDelay(10000);
              }}
            />
          </div>
          <div className="grid place-items-center">
            <CircleButton
              title={images[3].comment}
              className={`hover:bg-[#FBECD4] ${
                activeIndex === 3 ? "bg-[#FBECD4]" : "bg-white"
              }`}
              onClick={() => {
                setActiveIndex(3);
                clearInterval();
                setDelay(4000);
              }}
            />
          </div>
        </section>
        <figcaption
          className={` ${CorpsClass({
            size: "caption",
          })} text-center italic bg-[#FBECD4] rounded-xl py-2
         `}
        >
          {images[activeIndex].comment}
        </figcaption>
      </section>
    </>
  );
};

export default Carousel;
