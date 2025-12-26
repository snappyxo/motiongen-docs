import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import DocAnimation from '../DocAnimation';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.mainContainer)}>
        <div className={styles.subContainer}>
          <DocAnimation
            src={'/video/homepage-animation.mp4'}
            title="homepage animation"
          />
          <p>
            MotionGen is a planar mechanism design and simulation software part
            of SnappyXO Design suite of products developed by Stony Brook
            University and Mechanismic Inc. with the funding from the National
            Science Foundation via STTR Phase I and Phase 2 awards.
          </p>
          <div className={clsx('row', styles.logoGrid)}>
            <div className="col col--4">
              <img src={require('@site/static/img/sbu-logo.png').default} />
            </div>
            <div className="col col--4">
              <img src={require('@site/static/img/sbir-logo.png').default} />
            </div>
            <div className="col col--4">
              <img
                src={require('@site/static/img/snappyxo-logo.png').default}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
