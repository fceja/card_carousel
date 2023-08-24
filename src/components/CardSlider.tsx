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
  cardData: cardData,
}) => {
  return (
    <div id="main-slider-container">
      <MdChevronLeft className="slider-icon-left" onClick={slideLeft} />
      <div id="card-slider-container">
        <Card cardData={cardData} />
      </div>
      <MdChevronRight className="slider-icon-right" onClick={slideRight} />
    </div>
  );
};

export default CardSlider;
