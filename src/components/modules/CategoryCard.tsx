import React from 'react';
import Link from '@docusaurus/Link';

const CategoryCard = ({ category }) => {
  return (
    <div className="padding-vert--lg padding-horiz--lg">
      <Link to={`/docs/${category.slug}`} className="card">
        <div className="card__body">
          <img src={`/Lets-Do-Wiki/img/logo/${category.logo}`} alt={category.name} className="card__image" style={{ width: '50%', height: 'auto' }} />
          <div className="card__title">{category.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
