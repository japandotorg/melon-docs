import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Utility',
    Svg: require('../../static/img/utility.svg').default,
    description: (
      <>
        Melon comes with some powerful and useful utility commands
      </>
    ),
  },
  {
    title: 'Custom Commands',
    Svg: require('../../static/img/tags.svg').default,
    description: (
      <>
        Melon comes with the ability to create powerful custom commands through the usage of tag blocks
      </>
    ),
  },
  {
    title: 'Leveling',
    Svg: require('../../static/img/leveler.svg').default,
    description: (
      <>
        Melon comes with a powerful leveling system for free
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
