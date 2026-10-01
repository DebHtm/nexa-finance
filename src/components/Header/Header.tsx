import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>NexaFin</h1>
        <nav className={styles.nav}>
          <a href="/" className={styles.page}>AssetPage</a>
          <a href="/" className={styles.page}>MarketsPage</a>
          <a href="/" className={styles.page}>PortfolioPage</a>
        </nav>
        <div className={styles.rigthbutt}>
          <button className={styles.contact}>Contact</button>
          |
          <button className={styles.singin}>Sing In</button>
        </div>
      </header>
    </>
  );
};