import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Giveaways',
    Svg: require('@site/static/img/giveaways.svg').default,
    description: (
      <>
        Melon comes with a powerful giveaways system with alot of customisable features.
      </>
    ),
  },
  {
    title: 'Donation Logging',
    Svg: require('@site/static/img/dono.svg').default,
    description: (
      <>
        Melon comes with a powerful donation logging system with multiple categories and alot of customisable features.
      </>
    ),
  },
  {
    title: 'Custom Commands',
    Svg: require('@site/static/img/tags.svg').default,
    description: (
      <>
        Melon comes with the ability to create powerful custom commands with the usage of tagscript engine.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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