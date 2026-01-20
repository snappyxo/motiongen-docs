import React, { useRef } from 'react';
import styles from './styles.module.css';

interface DocAnimationProps {
  src: string;
  title?: string;
  caption?: string;
  maxWidth?: string;
  border?: boolean;
  align?: 'left' | 'center' | 'right';
  showRestart?: boolean;
}

export default function DocAnimation({
  src,
  title,
  caption,
  maxWidth,
  border = false,
  align = 'center',
  showRestart = true,
}: DocAnimationProps): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
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
        {showRestart && (
          <button
            className={styles.restartButton}
            onClick={handleRestart}
            title="Restart video"
            aria-label="Restart video"
          >
            ↺
          </button>
        )}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
