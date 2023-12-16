import React, { useState } from "react";
import { SliderData } from "../data/SliderData";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { Button } from "react-bootstrap";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider flex relative h-screen justify-center items-center">
      <SlArrowLeft
        className="left-arrow absolute  left-10 text-[3rem] z-10 cursor-pointer select-none"
        onClick={prevSlide}
      />
      <SlArrowRight
        className="right-arrow absolute  right-10 text-[3rem] z-10 cursor-pointer select-none"
        onClick={nextSlide}
      />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "slide active opacity-100 duration-1 scale-[1.08]"
                : "slide opacity-0 duration-1 ease"
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt=" image"
                className="image relative w-[1440px] h-[716px] rounded-[10px]"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
