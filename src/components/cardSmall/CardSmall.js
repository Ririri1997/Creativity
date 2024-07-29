import React from 'react';
import './cardSmall.scss';

const CardSmall = ({ title, text, img, alt, reverse }) => {
  const cardClasses = `card-small card ${reverse ? 'card-small--reverse' : ''}`;

  return (
    <div className={cardClasses}>
      <div className='card-info'>
        <p className='title'>{title}</p>
        <p>{text}</p>
      </div>
      <div className='card-small__img'>
      <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default CardSmall;