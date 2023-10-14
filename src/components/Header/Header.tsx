import { HeaderProps } from './Header.types';

import styles from './Header.module.css';

export const Header = ({ title, text }: HeaderProps) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
