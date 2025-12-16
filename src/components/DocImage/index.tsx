import React from 'react';
import styles from './styles.module.css';

interface DocImageProps {
  src: string;
  alt: string;
  caption?: string;
  maxWidth?: string;
  border?: boolean;
  align?: 'left' | 'center' | 'right';
}

export default function DocImage({
  src,
  alt,
  caption,
  maxWidth,
  border = false,
  align = 'center',
}: DocImageProps): React.JSX.Element {
  const containerStyle: React.CSSProperties = {};

  // Handle maxWidth and alignment
  if (maxWidth) {
    containerStyle.maxWidth = maxWidth;

    // Apply margin based on alignment
    if (align === 'center') {
      containerStyle.margin = '0 auto';
    } else if (align === 'left') {
      containerStyle.marginRight = 'auto';
    } else if (align === 'right') {
      containerStyle.marginLeft = 'auto';
    }
  }

  // Combine class names
  const className = [styles.container, border ? styles.border : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className} style={containerStyle}>
      <img src={src} alt={alt} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
