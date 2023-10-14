import { TilesHolderProps } from './TilesHolder.types';

import styles from './TilesHolder.module.css';

export const TilesHolder = ({ children }: TilesHolderProps) => {
  return <ul className={styles.holder}>{children}</ul>;
};
