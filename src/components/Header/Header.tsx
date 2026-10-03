import Button from '../Button';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const links = ['Markets', 'Portfolio', 'Pricing', 'Docs', 'About'];

const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <NavLink to="/" className={styles.logo}>
        <span className={styles.logoMark} />
        CryptoDash
      </NavLink>

      <nav className={styles.nav}>
        {links.map((link) => (
          <NavLink key={link} to={`${link.toLowerCase()}`}>{link}</NavLink>
        ))}
      </nav>

      <div className={styles.actions}>
        <button className={styles.themeToggle} aria-label="Toggle theme">◐</button>
        <Button variant="ghost">Log in</Button>
        <Button>Get started</Button>
      </div>
    </div>
  </header>
);

export default Header;