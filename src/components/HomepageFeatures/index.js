import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Visited Countries',
    src: './img/penguin_travel.png',
    description: (
      <>
        Austria 🇦🇹 Bahamas 🇧🇸 Belgium 🇧🇪 Cyprus 🇨🇾 Czech Republic 🇨🇿 
        Dominican Republic 🇩🇴 France 🇫🇷 Italy 🇮🇹 Ireland 🇮🇪 Spain 🇪🇸 
        United States 🇺🇸 Ukraine 🇺🇦 Turkey 🇹🇷 Portugal 🇵🇹 Puerto Rico 🇵🇷 
        Virgin Islands 🇻🇮 United Kingdom 🇬🇧 Germany 🇩🇪 Netherlands 🇳🇱 
        Switzerland 🇨🇭 San Marino 🇸🇲 Malta 🇲🇹 Tunisia 🇹🇳 Egypt 🇪🇬 Morocco 🇲🇦 
        Greece 🇬🇷 Israel 🇮🇱 Palestine 🇵🇸 Slovakia 🇸🇰 Hungary 🇭🇺   
      </>
    ),
  },
  {
    title: 'Visited Technologies',
    src: './img/penguin_laptop.png',
    description: (
      <>
        <code>React</code> <code>Angular</code> <code>JavaScript</code>
        <code>CSS</code> <code>Git</code> <code>GitHub</code> 
        <code>GTM</code> <code>Jenkins</code> <code>Docker</code> 
        <code>HTML</code> <code>Azure</code> <code>GitLab</code> 
        <code>BitBucket</code> <code>PostCSS</code> <code>SCSS</code> 
        <code>CSS-in-JS</code> <code>Storybook</code> <code>Express.js</code> 
        <code>Webpack</code> <code>Node.js</code> <code>Typescript</code> 
        <code>Rxjs</code> <code>REST API</code> <code>Redux</code> 
        <code>Graphql</code> <code>Karma</code> <code>Jasmine</code> 
        <code>Cypress</code> <code>Python</code>
      </>
    ),
  }
];

function Feature({Svg, title, description, src}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} width='80%' style={{borderRadius: '90% 10% 90% 10% / 13% 82% 18% 87%', boxShadow: '0px -10px 38px -2px rgba(0,0,0,0.1)'}}/>
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
