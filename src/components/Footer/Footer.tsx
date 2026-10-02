import styles from './Footer.module.scss';

const columns = [
  { title: 'Product', links: ['Markets', 'Portfolio', 'Watchlist', 'Pricing'] },
  { title: 'Resources', links: ['Docs', 'Blog', 'API', 'Status'] },
  { title: 'Company', links: ['About', 'Contact', 'Privacy', 'Terms'] },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.brand}>
        <a href="/" className={styles.logo}>CryptoDash</a>
        <p>Track the crypto market in one place.</p>
      </div>

      {columns.map((col) => (
        <div key={col.title} className={styles.column}>
          <h3>{col.title}</h3>
          <ul>
            {col.links.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className={styles.copy}>© 2026 CryptoDash. All rights reserved.</p>
  </footer>
);

export default Footer;