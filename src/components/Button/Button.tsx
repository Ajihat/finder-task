import { ButtonProps } from './Button.types';

import arrow from '../../assets/arrow.png';

import styles from './Button.module.css';

export const Button = ({ areTilesExpanded, setAreTilesExpanded }: ButtonProps) => {
  return (
    <div className={styles.container}>
      <button onClick={() => setAreTilesExpanded(prevState => !prevState)} className={styles.btn}>
        <span>{areTilesExpanded ? 'Show less categories' : 'Show more categories'}</span>
        <img
          src={arrow}
          alt="arrow"
          style={{
            transform: areTilesExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </button>
    </div>
  );
};
