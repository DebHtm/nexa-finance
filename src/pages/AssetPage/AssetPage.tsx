import Button from '../../components/Button';
import Card from '../../components/Card';
import styles from './AssetPage.module.scss';
import { NavLink } from 'react-router-dom';

const periods = ['1D', '1W', '1M', '1Y', 'ALL'];

const stats = [
  { label: 'Market cap', value: '$1.32T' },
  { label: '24h volume', value: '$28.4B' },
  { label: 'Circulating supply', value: '19.8M BTC' },
  { label: 'Max supply', value: '21M BTC' },
  { label: 'All-time high', value: '$126,200' },
  { label: 'All-time low', value: '$67.81' },
];

const links = ['Website', 'Whitepaper', 'GitHub', 'X / Twitter'];

const similar = [
  { symbol: 'ETH', name: 'Ethereum', price: '$3,512', change: '+1.1%', up: true },
  { symbol: 'SOL', name: 'Solana', price: '$142', change: '-1.2%', up: false },
  { symbol: 'BNB', name: 'BNB', price: '$598', change: '+0.8%', up: true },
];

const news = [
  { title: 'Bitcoin ETF inflows reach a new weekly high', source: 'CryptoNews', time: '2h ago' },
  { title: 'Analysts debate what comes next for BTC after the recent rally', source: 'Market Daily', time: '5h ago' },
  { title: 'Network hash rate hits a fresh all-time record', source: 'Chain Report', time: '1d ago' },
];

const AssetPage = () => (
  <div className={styles.page}>
    <nav className={styles.breadcrumbs}>
      <NavLink to="/markets">Markets</NavLink>
      <span>/</span>
      <span>Bitcoin</span>
    </nav>

    {/* Header */}
    <section className={styles.header}>
      <div className={styles.identity}>
        <span className={styles.icon}>B</span>
        <div>
          <h1>Bitcoin <small>BTC</small></h1>
          <span className={styles.rank}>Rank #1</span>
        </div>
      </div>
      <div className={styles.priceBlock}>
        <p className={styles.price}>$67,240.00</p>
        <p className={styles.up}>+2.4% (24h)</p>
      </div>
    </section>

    <div className={styles.layout}>
      <div className={styles.main}>
        {/* Chart */}
        <Card>
          <div className={styles.cardHead}>
            <h2>Price chart</h2>
            <div className={styles.tabs}>
              {periods.map((p, i) => (
                <button key={p} className={`${styles.tab} ${i === 2 ? styles.tabActive : ''}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.chart}>Chart placeholder</div>
        </Card>

        {/* Key stats */}
        <Card>
          <div className={styles.cardHead}>
            <h2>Key statistics</h2>
          </div>
          <dl className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        {/* About */}
        <Card>
          <div className={styles.cardHead}>
            <h2>About Bitcoin</h2>
          </div>
          <p className={styles.description}>
            Bitcoin is a decentralized digital currency that lets people send value directly to each
            other without a central authority. Transactions are verified by a distributed network
            and recorded on a public ledger called the blockchain.
          </p>
          <div className={styles.links}>
            {links.map((l) => <a key={l} href="#">{l}</a>)}
          </div>
        </Card>
      </div>

      <aside className={styles.side}>
        {/* Position + actions */}
        <Card>
          <div className={styles.cardHead}>
            <h2>Your position</h2>
          </div>
          <dl className={styles.position}>
            <div><dt>Holdings</dt><dd>0.2400 BTC</dd></div>
            <div><dt>Value</dt><dd>$16,137</dd></div>
            <div><dt>P&amp;L</dt><dd className={styles.up}>+$4,210</dd></div>
          </dl>
          <div className={styles.actions}>
            <Button className={styles.full}>Add to portfolio</Button>
            <Button variant="outline" className={styles.full}>Set price alert</Button>
            <Button variant="ghost" className={styles.full}>☆ Add to watchlist</Button>
          </div>
        </Card>

        {/* Similar coins */}
        <Card>
          <div className={styles.cardHead}>
            <h2>Similar coins</h2>
          </div>
          <ul className={styles.list}>
            {similar.map((c) => (
              <li key={c.symbol}>
                <a href="#">
                  <span className={styles.coinIcon}>{c.symbol[0]}</span>
                  <span className={styles.coinName}>{c.name}</span>
                  <span>{c.price}</span>
                  <span className={c.up ? styles.up : styles.down}>{c.change}</span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </aside>
    </div>

    {/* News */}
    <section>
      <h2 className={styles.newsTitle}>Latest news</h2>
      <div className={styles.newsGrid}>
        {news.map((n) => (
          <Card key={n.title}>
            <h3 className={styles.newsHeading}><a href="#">{n.title}</a></h3>
            <p className={styles.meta}>{n.source} · {n.time}</p>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default AssetPage;