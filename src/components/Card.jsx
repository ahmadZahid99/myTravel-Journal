import React from 'react';
import mountFuji from '../assets/mount-fuji.png';
import location from '../assets/location.png';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.card.imageUrl} className='card--image' />
      <div className='card--info'>
        <p className='card--info-h5'>
          <img src={location} className='card--info-image' />
          <span className='card--info-location'>{props.card.location}</span>
          <span>
            <a target='_blank' href={props.card.googleMapsUrl}>
              View on Google Maps
            </a>
          </span>
        </p>
        <h3>{props.card.title}</h3>
        <h4 className='card--info-h4'>{`${props.card.startDate} - ${props.card.endDate}`}</h4>
        <p className='card--info-p'>{props.card.description}</p>
      </div>
    </div>
  );
};

export default Card;
