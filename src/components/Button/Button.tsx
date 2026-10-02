import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
};

const Button = ({ variant = 'primary', size = 'md', className = '', ...rest }: Props) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
    {...rest}
  />
);

export default Button;