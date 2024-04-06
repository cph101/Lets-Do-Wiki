import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CategoryCard from './CategoryCard'; // Import your CategoryCard component

const MainCategoryList = [
  {
    name: 'Meadow',
    slug: 'meadow',
    description: (
      <>
        Start your journey with Docusaurus and learn how to get started with your documentation.
      </>
    ),
  },
  {
    name: 'Brewery',
    slug: 'brewery',
    description: (
      <>
        Find answers to frequently asked questions about Docusaurus and its usage.
      </>
    ),
  },
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
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCategories(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {MainCategoryList.map((category, idx) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
