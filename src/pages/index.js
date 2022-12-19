import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className='svgLinks'>
          <Link
              href='https://ie.linkedin.com/in/lucatardito' target={'_blank'}>
                <svg fill="var(--ifm-color-svg)" width='48px' x="0px" y="0px" viewBox="0 0 504.4 504.4"><g><g><path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </Link>
          <Link
            href='https://www.instagram.com/luca.tardito' target={'_blank'}>
            <svg fill="var(--ifm-color-svg)" width='48px' x="0px" y="0px" viewBox="0 0 504.4 504.4"><g><g><path d="M296.8,219.8c-10-14-26.4-23.2-44.8-23.2c-18.4,0-34.8,9.2-44.8,23.2c-6.4,9.2-10.4,20.4-10.4,32.4c0,30.4,24.8,55.2,55.2,55.2c30.4,0,55.2-24.8,55.2-55.2C307.2,240.2,303.2,229,296.8,219.8z"/></g></g><g><g><path d="M331.6,220.2c4,8,6.4,20.8,6.4,32c0,47.2-38.4,86-86,86c-47.6,0-86-38.4-86-86c0-11.6,2.4-24,6.4-32H124v128.4c0,16.8,14.8,31.6,31.6,31.6h192.8c16.8,0,31.6-14.8,31.6-31.6V220.2H331.6z"/></g></g><g><g><polygon points="365.6,131.4 319.2,131.4 319.2,184.6 372,184.6 372,138.2 372,131 		"/></g></g><g><g><path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6C504,57,447.2,0.2,377.6,0.2z M408,219.8L408,219.8l0,128.8c0,33.6-26,59.6-59.6,59.6H155.6c-33.6,0-59.6-26-59.6-59.6V219.8v-64c0-33.6,26-59.6,59.6-59.6h192.8c33.6,0,59.6,26,59.6,59.6V219.8z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
         </Link>
        </div>
        <p className="hero__subtitle">
          <Translate id="homepage.siteConfig.tagline">{siteConfig.tagline}</Translate>
          </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/luca">
              <Translate id="homepage.aboutMe">About me</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
