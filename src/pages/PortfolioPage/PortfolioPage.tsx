import Button from '../../components/Button';
import Card from '../../components/Card';
import styles from './PortfolioPage.module.scss';

const stats = [
  { label: 'Total balance', value: '$24,580.20', change: '+3.2% today', tone: 'up' },
  { label: '24h P&L', value: '+$762.40', change: '+3.2%', tone: 'up' },
  { label: 'All-time P&L', value: '+$8,914.10', change: '+57.0%', tone: 'up' },
  { label: 'Assets', value: '12', change: '3 networks', tone: 'muted' },
];

const periods = ['1D', '1W', '1M', '1Y', 'ALL'];

const allocation = [
  { name: 'Bitcoin', share: '62%' },
  { name: 'Ethereum', share: '22%' },
  { name: 'Solana', share: '9%' },
  { name: 'Other', share: '7%' },
];

const holdings = [
  { symbol: 'BTC', name: 'Bitcoin', amount: '0.2400', price: '$67,240', change: '+2.4%', value: '$16,137', pnl: '+$4,210', up: true },
  { symbol: 'ETH', name: 'Ethereum', amount: '1.5000', price: '$3,512', change: '+1.1%', value: '$5,268', pnl: '+$1,020', up: true },
  { symbol: 'SOL', name: 'Solana', amount: '15.00', price: '$142', change: '-1.2%', value: '$2,130', pnl: '-$180', up: false },
];

const achievements = [
  { title: 'First trade', locked: false },
  { title: 'HODLer 1y', locked: false },
  { title: 'Diversified', locked: true },
  { title: 'Green month', locked: true },
];

const transactions = [
  { type: 'Buy', asset: 'BTC', amount: '+0.0100', date: 'Oct 1' },
  { type: 'Sell', asset: 'SOL', amount: '-5.00', date: 'Sep 28' },
  { type: 'Buy', asset: 'ETH', amount: '+0.2500', date: 'Sep 20' },
];

const watchlist = [
  { symbol: 'AVAX', price: '$36.20', change: '+4.8%', up: true },
  { symbol: 'LINK', price: '$14.10', change: '-0.6%', up: false },
  { symbol: 'DOT', price: '$6.45', change: '+1.9%', up: true },
];

const PortfolioPage = () => (
  <div className={styles.page}>
    {/* Profile header */}
    <section className={styles.profile}>
      <div className={styles.avatar}>A</div>
      <div className={styles.profileInfo}>
        <h1>Alex Morgan</h1>
        <p>@alexmorgan · Member since 2024</p>
        <div className={styles.badges}>
          <span className={styles.badge}>Pro</span>
          <span className={styles.badge}>Long-term holder</span>
        </div>
      </div>
      <div className={styles.profileActions}>
        <Button variant="outline">Edit profile</Button>
        <Button>Share portfolio</Button>
      </div>
    </section>

    {/* Stats */}
    <section className={styles.statsGrid}>
      {stats.map((s) => (
        <Card key={s.label}>
          <p className={styles.statLabel}>{s.label}</p>
          <p className={styles.statValue}>{s.value}</p>
          <p className={styles[s.tone]}>{s.change}</p>
        </Card>
      ))}
    </section>

    {/* Chart + allocation */}
    <section className={styles.mainGrid}>
      <Card>
        <div className={styles.cardHead}>
          <h2>Balance history</h2>
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

      <Card>
        <div className={styles.cardHead}>
          <h2>Allocation</h2>
        </div>
        <div className={styles.donut} />
        <ul className={styles.legend}>
          {allocation.map((a, i) => (
            <li key={a.name}>
              <span className={`${styles.dot} ${styles[`dot${i}`]}`} />
              {a.name}
              <span>{a.share}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>

    {/* Holdings */}
    <Card>
      <div className={styles.cardHead}>
        <h2>Your assets</h2>
        <Button variant="outline">Add transaction</Button>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Holdings</th>
              <th>Price</th>
              <th>24h</th>
              <th>Value</th>
              <th>P&amp;L</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h) => (
              <tr key={h.symbol}>
                <td>
                  <div className={styles.asset}>
                    <span className={styles.coinIcon}>{h.symbol[0]}</span>
                    {h.name} <small>{h.symbol}</small>
                  </div>
                </td>
                <td>{h.amount}</td>
                <td>{h.price}</td>
                <td className={h.up ? styles.up : styles.down}>{h.change}</td>
                <td>{h.value}</td>
                <td className={h.up ? styles.up : styles.down}>{h.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>

    {/* Goals + achievements / transactions / watchlist */}
    <section className={styles.bottomGrid}>
      <Card>
        <div className={styles.cardHead}>
          <h2>Goal</h2>
        </div>
        <p>Reach $50,000</p>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: '49%' }} />
        </div>
        <div className={styles.goalMeta}>
          <span>$24,580</span>
          <span>49%</span>
        </div>

        <div className={styles.achievements}>
          {achievements.map((a) => (
            <div key={a.title} className={`${styles.achievement} ${a.locked ? styles.locked : ''}`}>
              {a.title}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className={styles.cardHead}>
          <h2>Recent activity</h2>
        </div>
        <ul className={styles.list}>
          {transactions.map((t, i) => (
            <li key={i}>
              <div>
                {t.type} {t.asset}
                <small>{t.date}</small>
              </div>
              <span>{t.amount}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <div className={styles.cardHead}>
          <h2>Watchlist</h2>
        </div>
        <ul className={styles.list}>
          {watchlist.map((w) => (
            <li key={w.symbol}>
              <div>
                {w.symbol}
                <small>{w.price}</small>
              </div>
              <span className={w.up ? styles.up : styles.down}>{w.change}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  </div>
);

export default PortfolioPage;