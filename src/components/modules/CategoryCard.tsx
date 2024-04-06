import React from 'react';
import Link from '@docusaurus/Link';

const CategoryCard = ({ category }) => {
  return (
    <div className="cardContainer_fWXF">
      <Link to={`/docs/${category.slug}`} className="cardLinkAnchor_1w01">
        <h2>{category.name}</h2>
        {/* You can add more information about the category if needed */}
      </Link>
    </div>
  );
};

export default CategoryCard;
