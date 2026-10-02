import Button from '../Button';
import styles from './TopCoins.module.scss';

const cryptoData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 85214.0,
    change24h: 1.1,
    change7d: 1.54,
    chartColor: 'green',
    icon: '/images/bitcoin.svg',
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2694.87,
    change24h: 0.39,
    change7d: 0.05,
    chartColor: 'green',
    icon: '/images/ethereum.svg',
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: 0.9999,
    change24h: 0.02,
    change7d: 0.01,
    chartColor: 'green',
    icon: '/images/tether.svg',
  },
  {
    id: 4,
    name: 'XRP',
    symbol: 'XRP',
    price: 1.51,
    change24h: 1.28,
    change7d: -5.15,
    chartColor: 'red',
    icon: '/images/xrp.svg',
  },
  {
    id: 5,
    name: 'Solana',
    symbol: 'SOL',
    price: 120.06,
    change24h: 2.27,
    change7d: -0.34,
    chartColor: 'red',
    icon: '/images/solana.svg',
  },
  {
    id: 6,
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.0951,
    change24h: 0.95,
    change7d: -2.81,
    chartColor: 'red',
    icon: '/images/dogecoin.svg',
  },
  {
    id: 7,
    name: 'Chainlink',
    symbol: 'LINK',
    price: 14.2,
    change24h: -0.94,
    change7d: 1.51,
    chartColor: 'green',
    icon: '/images/chainlink.svg',
  },
  {
    id: 8,
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.2529,
    change24h: 2.6,
    change7d: -1.29,
    chartColor: 'red',
    icon: '/images/cardano.svg',
  },
];

const TopCoins = () => (
  <>
    {cryptoData.map((coin) => (
      <div key={coin.id} className={styles.coinbox}>
        <span>{coin.id}</span>

        <img src={coin.icon} alt={coin.name} />

        <span>{coin.name}</span>
        <span>{coin.symbol}</span>

        <span>${coin.price}</span>

        <span className={coin.change24h >= 0 ? 'positive' : 'negative'}>
          {coin.change24h > 0 ? '+' : ''}
          {coin.change24h}%
        </span>

        <span className={coin.change7d >= 0 ? 'positive' : 'negative'}>
          {coin.change7d > 0 ? '+' : ''}
          {coin.change7d}%
        </span>

       <Button>Buy</Button>
      </div>
    ))}
  </>
);

export default TopCoins;