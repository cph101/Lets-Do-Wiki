import React from 'react';
import React from 'react';
import Link from '@docusaurus/Link';

const CategoryCard = ({ category }) => {
  return (
    <div className="padding-vert--lg padding-horiz--lg">
      <Link to={`/docs/${category.slug}`} className="card">
        <div className="card__body">
          {/* Replace text with logo image */}
          <img src={category.logo} alt={category.name} className="card__image" />
          <div className="card__title">{category.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
