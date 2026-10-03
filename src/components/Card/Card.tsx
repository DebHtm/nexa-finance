import type { HTMLAttributes } from 'react';
import styles from './Card.module.scss';
import { NavLink } from 'react-router-dom';

const Card = ({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`${styles.card} ${className}`} {...rest} />
);

export default Card;