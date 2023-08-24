import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "../styles/CardSlider.scss";
import * as CardSliderTypes from "../types/CardSliderTypes";
import Card from "./Card";

const slideLeft = () => {
  var slider = document.getElementById("card-slider-container") as HTMLElement;
  slider.scrollLeft = slider.scrollLeft - 300;
};

const slideRight = () => {
  var slider = document.getElementById("card-slider-container") as HTMLElement;
  slider.scrollLeft = slider.scrollLeft + 300;
};

const CardSlider: React.FC<CardSliderTypes.CardSliderPropsType> = ({
  cards,
}) => {
  return (
    <div id="main-slider-container">
      <MdChevronLeft id="left-slider-icon" onClick={slideLeft} />
      <div id="card-slider-container">
        {cards.map((card, index) => (
          <Card card={card} index={index} key={index} />
        ))}
      </div>
      <MdChevronRight id="right-slider-icon" onClick={slideRight} />
    </div>
  );
};

export default CardSlider;
