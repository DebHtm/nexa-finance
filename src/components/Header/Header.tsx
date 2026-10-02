import Button from '../Button';
import styles from './Header.module.scss';

const links = ['Markets', 'Portfolio', 'Pricing', 'Docs', 'About'];

const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoMark} />
        CryptoDash
      </a>

      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
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