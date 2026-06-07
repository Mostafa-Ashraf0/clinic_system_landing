import React from 'react';
import '../../../style/keyFeatures/featureCard.css';

type CardProbs = {
    image: string,
    title:string,
    description: string,
    iconBackground: string
}

const FeatureCard = ({ image, title, description, iconBackground}: CardProbs) => {
  return (
    <div className="feature-card">
      <div className="feature-card__image-container" style={{backgroundColor: `${iconBackground}`}}>
        <img src={image} alt={title} className="feature-card__image" />
      </div>
      <div className="feature-card__content">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;