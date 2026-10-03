import CoinCard from '../../features/market/CoinCard';
import type { CoinSummary } from '../../types/coin';
import styles from './MarketsPage.module.scss';

const tabs = ['All', 'Gainers', 'Losers', 'Watchlist'];
const sortOptions = ['Market cap', 'Price', '24h change', 'Name'];
const pages = [1, 2, 3, '…', 12];

const coins: CoinSummary[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: '$67,240', change: '+2.4%', marketCap: '$1.32T', up: true },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: '$3,512', change: '+1.1%', marketCap: '$422B', up: true },
  { id: 'solana', symbol: 'SOL', name: 'Solana', price: '$142', change: '-1.2%', marketCap: '$65B', up: false },
  { id: 'bnb', symbol: 'BNB', name: 'BNB', price: '$598', change: '+0.8%', marketCap: '$87B', up: true },
  { id: 'xrp', symbol: 'XRP', name: 'XRP', price: '$0.52', change: '-2.1%', marketCap: '$29B', up: false },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: '$0.45', change: '+3.6%', marketCap: '$16B', up: true },
  { id: 'avalanche', symbol: 'AVAX', name: 'Avalanche', price: '$36.20', change: '+4.8%', marketCap: '$14B', up: true },
  { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin', price: '$0.12', change: '-0.9%', marketCap: '$17B', up: false },
];

const MarketsPage = () => (
  <div className={styles.page}>
    <div className={styles.head}>
      <h1>Markets</h1>
      <p className={styles.lead}>Browse prices and trends for the top cryptocurrencies.</p>
    </div>

    <div className={styles.toolbar}>
      <div className={styles.tabs}>
        {tabs.map((t, i) => (
          <button key={t} className={`${styles.tab} ${i === 0 ? styles.tabActive : ''}`}>
            {t}
          </button>
        ))}
      </div>

      <div className={styles.controls}>
        <input className={styles.search} type="search" placeholder="Search coins..." />
        <select className={styles.select} aria-label="Sort by">
          {sortOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
    </div>

    <div className={styles.grid}>
      {coins.map((c) => <CoinCard key={c.id} coin={c} />)}
    </div>

    <nav className={styles.pagination} aria-label="Pagination">
      <button className={styles.pageBtn} disabled>Prev</button>
      {pages.map((p, i) => (
        <button key={i} className={`${styles.pageBtn} ${i === 0 ? styles.pageActive : ''}`}>
          {p}
        </button>
      ))}
      <button className={styles.pageBtn}>Next</button>
    </nav>
  </div>
);

export default MarketsPage;