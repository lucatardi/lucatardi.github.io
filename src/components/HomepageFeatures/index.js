import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Visited Countries',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Austria 🇦🇹 Bahamas 🇧🇸 Belgium 🇧🇪 Cyprus 🇨🇾 Czech Republic 🇨🇿 Dominican Republic 🇩🇴 France 🇫🇷 Italy 🇮🇹 Ireland 🇮🇪 Spain 🇪🇸 United States 🇺🇸 Ukraine 🇺🇦 Turkey 🇹🇷 Portugal 🇵🇹 Puerto Rico 🇵🇷 Virgin Islands 🇻🇮 United Kingdom 🇬🇧 Germany 🇩🇪 Netherlands 🇳🇱 Switzerland 🇨🇭 San Marino 🇸🇲 Malta 🇲🇹 Tunisia 🇹🇳 Egypt 🇪🇬 Morocco 🇲🇦 Greece 🇬🇷 Israel 🇮🇱 Palestine 🇵🇸 Slovakia 🇸🇰 Hungary 🇭🇺   
      </>
    ),
  },
  {
    title: 'Visited Technologies',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <code>React</code> <code>Angular</code> <code>JavaScript</code> <code>HTML</code> <code>CSS</code> <code>Git</code> <code>GitHub</code> <code>GTM</code> <code>Jenkins</code> <code>Docker</code> <code>HTML</code>
      </>
    ),
  }
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
        <div className={`row ${styles.row}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
