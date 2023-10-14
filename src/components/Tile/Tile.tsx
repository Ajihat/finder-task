import { TileProps } from './TileProps';

import styles from './Tile.module.css';

export const Tile = ({ text, href, icon }: TileProps) => {
  return (
    <a className={styles.tile} href={href}>
      <img className={styles.img} src={icon} />
      <p className={styles.text}>{text}</p>
    </a>
  );
};
