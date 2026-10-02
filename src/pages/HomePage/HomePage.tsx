import Button from '../../components/Button';
import Card from '../../components/Card';
import styles from './HomePage.module.scss';

const ticker = [
  { symbol: 'BTC', name: 'Bitcoin', price: '$67,240', change: '+2.4%', up: true },
  { symbol: 'ETH', name: 'Ethereum', price: '$3,512', change: '+1.1%', up: true },
  { symbol: 'SOL', name: 'Solana', price: '$142', change: '-1.2%', up: false },
];

const features = [
  { title: 'Live market data', text: 'Prices, volume and market cap for thousands of assets.' },
  { title: 'Portfolio tracking', text: 'See your holdings and profit & loss in one place.' },
  { title: 'Watchlist', text: 'Follow only the coins you care about.' },
  { title: 'Price alerts', text: 'Get notified when a price hits your target.' },
  { title: 'Detailed charts', text: 'Historical charts with multiple timeframes.' },
  { title: 'Light & dark theme', text: 'Pick the look that suits you.' },
];

const plans = [
  { name: 'Free', price: '$0', perks: ['Market overview', '1 portfolio', 'Basic charts'], featured: false },
  { name: 'Pro', price: '$9', perks: ['Unlimited portfolios', 'Price alerts', 'Advanced charts'], featured: true },
  { name: 'Team', price: '$29', perks: ['Everything in Pro', 'Shared watchlists', 'Priority support'], featured: false },
];

const HomePage = () => (
  <>
    {/* Hero */}
    <section className={`${styles.section} ${styles.hero}`}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <span className={styles.badge}>Real-time crypto tracking</span>
          <h1>Track the crypto market in one place</h1>
          <p className={styles.lead}>
            Monitor prices, manage your portfolio and follow your favorite assets with a clean, fast dashboard.
          </p>
          <div className={styles.heroActions}>
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="outline">View markets</Button>
          </div>
        </div>

        <Card className={styles.preview}>
          <h3>Top assets</h3>
          <ul className={styles.tickerList}>
            {ticker.map((t) => (
              <li key={t.symbol} className={styles.tickerRow}>
                <span className={styles.coinIcon}>{t.symbol[0]}</span>
                <span className={styles.coinName}>
                  {t.name} <small>{t.symbol}</small>
                </span>
                <span>{t.price}</span>
                <span className={t.up ? styles.up : styles.down}>{t.change}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>

    {/* Features */}
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2>Everything you need</h2>
          <p className={styles.lead}>Simple tools to stay on top of your crypto.</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <Card key={f.title}>
              <div className={styles.featureIcon} />
              <h3>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2>Simple pricing</h2>
          <p className={styles.lead}>Start free, upgrade when you need more.</p>
        </div>
        <div className={styles.pricingGrid}>
          {plans.map((p) => (
            <Card key={p.name} className={p.featured ? styles.featuredPlan : ''}>
              <h3>{p.name}</h3>
              <p className={styles.price}>
                {p.price}<span>/mo</span>
              </p>
              <ul className={styles.perks}>
                {p.perks.map((perk) => <li key={perk}>{perk}</li>)}
              </ul>
              <Button variant={p.featured ? 'primary' : 'outline'} style={{ width: '100%' }}>
                Choose {p.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.cta}`}>
        <h2>Ready to start tracking?</h2>
        <Button size="lg">Create free account</Button>
      </div>
    </section>
  </>
);

export default HomePage;