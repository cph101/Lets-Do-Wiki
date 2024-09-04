/* index.tsx */

import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CategoryCard from '@site/src/components/modules/CategoryCard';

const MainCategoryList = [
   {
      name: 'Bakery',
      slug: 'bakery',
      logo: 'bakery.png'
  },
  {
      name: 'Brewery',
      slug: 'brewery',
      logo: 'brewery.png'
  },
  {
      name: 'Candlelight',
      slug: 'candlelight',
      logo: 'candlelight.png'
  },
  /*
  {
      name: 'Farm & Char,',
      slug: 'farmcharm',
      logo: 'farmcharm.png'
  },
  */
  {
      name: 'Furniture',
      slug: 'furniture',
      logo: 'furniture.png'
  },
  {
      name: 'Herbal Brews',
      slug: 'herbalbrews',
      logo: 'herbalbrews.png'
  },
  {
      name: 'Meadow',
      slug: 'meadow',
      logo: 'meadow.png'
  },
  {
      name: 'Vinery',
      slug: 'vinery',
      logo: 'vinery.png'
  },
  {
      name: 'Wilder Nature',
      slug: 'wildernature',
      logo: 'wildernature.png'
  }

  // Add more main categories as needed
];

function MainCategory({name, description, slug}: {name: string, description: JSX.Element, slug: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* You can add an SVG icon for each category if desired */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{name}</Heading>
      </div>
    </div>
  );
}

export default function HomepageCategories(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {MainCategoryList.map((category, idx) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
    </section>
  );
}
