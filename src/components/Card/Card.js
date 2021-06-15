import React from 'react';
import './card.css'

const Card = ({title, subtitle, picture}) => {
    return (
        <div className="card">
            <img className={'card__image'} src={picture} alt={title}/>
            <p className="card__title">{title}</p>
            <p className="card__subtitle">{subtitle}</p>

        </div>
    )
};

export default Card;