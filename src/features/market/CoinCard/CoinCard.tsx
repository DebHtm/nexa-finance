import type { CoinSummary } from '../../../types/coin';
import styles from './CoinCard.module.scss';
import { NavLink } from 'react-router-dom';

const UP = '0,26 15,22 30,24 45,15 60,17 75,8 100,4';
const DOWN = '0,6 15,10 30,8 45,17 60,15 75,23 100,27';

const CoinCard = ({ coin }: { coin: CoinSummary }) => (
  <article className={styles.card}>
    <div className={styles.top}>
      <span className={styles.icon}>{coin.symbol[0]}</span>
      <div className={styles.name}>
        <NavLink to={`/markets/${coin.id}`} className={styles.link}>{coin.name}</NavLink>
        <small>{coin.symbol}</small>
      </div>
      <button className={styles.star} aria-label="Add to watchlist">☆</button>
    </div>

    <div className={`${styles.spark} ${coin.up ? styles.up : styles.down}`}>
      <svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points={coin.up ? UP : DOWN}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>

    <div className={styles.bottom}>
      <div>
        <p className={styles.price}>{coin.price}</p>
        <p className={styles.cap}>MCap {coin.marketCap}</p>
      </div>
      <span className={`${styles.change} ${coin.up ? styles.up : styles.down}`}>
        {coin.change}
      </span>
    </div>
  </article>
);

export default CoinCard;