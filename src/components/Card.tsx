import "../styles/Card.scss";
import * as CardTypes from "../types/CardTypes";

const Card: React.FC<CardTypes.CardPropsType> = ({ card, index }) => {
  return (
    <div id={`card-${index}`} className="card" key={index}>
      <a className="img-link" href={card.urlLink}>
        <div
          className="img"
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>
      </a>
      <p className="title">{card.title}</p>
      <p className="description">{card.description}</p>
    </div>
  );
};

export default Card;
