import React from 'react';

const CardTile = (props) => {
    return (
        <div className="card-tile">
            <img src={props.imgSrc} alt={props.imgAlt} />
            <div className="card-tile-content">
                {props.children}
            </div>
        </div>
    )
}

export default CardTile;