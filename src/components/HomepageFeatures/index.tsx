import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.centeredColumn)}>
        <div className={styles.subContainer}>
          <img
            className={styles.animation}
            src={require('@site/static/gif/homepage-animation.gif').default}
          ></img>
          <p>
            MotionGen is a planar mechanism design and simulation software part
            of SnappyXO Design suite of products developed by Stony Brook
            University and Mechanismic Inc. with the funding from the National
            Science Foundation via STTR Phase I and Phase 2 awards.
          </p>
        </div>
      </div>
    </section>
  );
}
