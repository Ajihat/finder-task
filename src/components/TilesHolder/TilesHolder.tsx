import { TilesHolderProps } from './TilesHolder.types';

import styles from './TilesHolder.module.css';

export const TilesHolder = ({ children }: TilesHolderProps) => {
  return <div className={styles.holder}>{children}</div>;
};
