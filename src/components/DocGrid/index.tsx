import React from 'react';
import styles from './styles.module.css';

interface DocGridProps {
  columns?: number;
  gap?: string;
  minWidth?: string;
  children: React.ReactNode;
}

export default function DocGrid({
  columns,
  gap = '1rem',
  minWidth = '300px',
  children,
}: DocGridProps): React.JSX.Element {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: columns
      ? `repeat(${columns}, minmax(0, 1fr))`
      : `repeat(auto-fit, minmax(min(${minWidth}, 100%), 1fr))`,
    gap: gap,
  };

  return (
    <div className={styles.grid} style={gridStyle}>
      {children}
    </div>
  );
}
