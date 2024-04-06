import React from 'react';
import Link from '@docusaurus/Link';
import './category.card.css'; // Import the CSS file with your custom styles

const CategoryCard = ({ category }) => {
  return (
    <div className="cardContainer_fWXF">
      <Link to={`/docs/${category.slug}`} className="card">
        <div className="card__body">
          <img src={`/Lets-Do-Wiki/img/logo/${category.logo}`} alt={category.name} className="card__image" />
          <div className="card__title">{category.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
