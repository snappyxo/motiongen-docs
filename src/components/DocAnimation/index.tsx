import React from 'react';
import styles from './styles.module.css';

interface DocAnimationProps {
  src: string;
  title?: string;
  caption?: string;
  maxWidth?: string;
  border?: boolean;
  align?: 'left' | 'center' | 'right';
}

export default function DocAnimation({
  src,
  title,
  caption,
  maxWidth,
  border = false,
  align = 'center',
}: DocAnimationProps): React.JSX.Element {
  const containerStyle: React.CSSProperties = {};

  // Handle maxWidth and alignment
  if (maxWidth) {
    containerStyle.maxWidth = maxWidth;

    // Apply margin based on alignment
    if (align === 'center') {
      containerStyle.marginLeft = 'auto';
      containerStyle.marginRight = 'auto';
    } else if (align === 'left') {
      containerStyle.marginRight = 'auto';
    } else if (align === 'right') {
      containerStyle.marginLeft = 'auto';
    }
  }

  // Apply border class to video if needed
  const videoClassName = border ? styles.border : '';

  return (
    <div className={styles.container} style={containerStyle}>
      <video
        className={videoClassName}
        autoPlay
        loop
        muted
        playsInline
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
