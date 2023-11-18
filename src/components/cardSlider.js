import React from "react";
import "../styles/cardSlider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ReactCardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft className="left-slider-icon" onClick={slideLeft} />
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div
              className="slider-card"
              key={index}
              onClick={() => slide.clickEvent()}
            >
              <a href={slide.urlLink}>
                <div
                  className="slider-card-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  href="google.com"
                ></div>
              </a>
              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description">{slide.description}</p>
            </div>
          );
        })}
      </div>
      <MdChevronRight className="right-slider-icon" onClick={slideRight} />
    </div>
  );
};

export default ReactCardSlider;
