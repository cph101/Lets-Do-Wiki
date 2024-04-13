/* index.tsx */

import React from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CategoryCard from '@site/src/components/modules/CategoryCard';

const MainCategoryList = [
  {
    name: 'Meadow',
    slug: 'meadow',
    logo: 'meadow.png',
    description: (
      <>
        Start your journey with Docusaurus and learn how to get started with your documentation.
      </>
    ),
  },
  {
    name: 'Brewery',
    slug: 'brewery',
    logo: 'brewery.png',
    description: (
      <>
        Find answers to frequently asked questions about Docusaurus and its usage.
      </>
    ),
  },
  {
      name: 'Herbal Brews',
      slug: 'herbalbrews',
      logo: 'herbalbrews.png',
      description: (
        <>
          Find answers to frequently asked questions about Docusaurus and its usage.
        </>
      ),
    },
    {
        name: 'Meadow',
        slug: 'meadow',
        logo: 'meadow.png',
        description: (
          <>
            Start your journey with Docusaurus and learn how to get started with your documentation.
          </>
        ),
      },
      {
        name: 'Brewery',
        slug: 'brewery',
        logo: 'brewery.png',
        description: (
          <>
            Find answers to frequently asked questions about Docusaurus and its usage.
          </>
        ),
      },
      {
          name: 'Herbal Brews',
          slug: 'herbalbrews',
          logo: 'herbalbrews.png',
          description: (
            <>
              Find answers to frequently asked questions about Docusaurus and its usage.
            </>
          ),
        },
        {
            name: 'Meadow',
            slug: 'meadow',
            logo: 'meadow.png',
            description: (
              <>
                Start your journey with Docusaurus and learn how to get started with your documentation.
              </>
            ),
          },
          {
            name: 'Brewery',
            slug: 'brewery',
            logo: 'brewery.png',
            description: (
              <>
                Find answers to frequently asked questions about Docusaurus and its usage.
              </>
            ),
          },
          {
              name: 'Herbal Brews',
              slug: 'herbalbrews',
              logo: 'herbalbrews.png',
              description: (
                <>
                  Find answers to frequently asked questions about Docusaurus and its usage.
                </>
              ),
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
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCategories(): JSX.Element {
  useEffect(() => {
    const calculateWidthInCentimeters = () => {
      // Get the viewport width in pixels
      const viewportWidthPixels = window.innerWidth;

      // Convert the viewport width from pixels to centimeters
      const viewportWidthCentimeters = viewportWidthPixels / window.devicePixelRatio / 2.54;

      // Define the threshold width in centimeters
      const thresholdWidthCentimeters = 15; // Adjust this value as needed

      // Check if the viewport width is smaller than the threshold
      const isViewportSmallerThanThreshold = viewportWidthCentimeters < thresholdWidthCentimeters;

      // Get the grid element
      const gridElement = document.querySelector(`.${styles.grid}`);

      // Update the grid template columns based on the viewport width
      if (gridElement && isViewportSmallerThanThreshold) {
        gridElement.style.gridTemplateColumns = '1fr';
      } else {
        gridElement.style.gridTemplateColumns = '1fr 1fr'; // Default value
      }
    };

    // Call the function to calculate and apply the styles initially
    calculateWidthInCentimeters();

    // Re-calculate and re-apply the styles whenever the window is resized
    window.addEventListener('resize', calculateWidthInCentimeters);

    // Cleanup function to remove the resize listener
    return () => {
      window.removeEventListener('resize', calculateWidthInCentimeters);
    };
  }, []); // Run only once when the component mounts

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
