import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import AssetPage from './pages/AssetPage';
// import MarketsPage from './pages/MarketsPage';
// import PortfolioPage from './pages/PortfolioPage';

const App = () => (
  <>
    <Header />
    <main>
      <HomePage />
      {/* <PortfolioPage /> */}
      {/* <MarketsPage /> */}
      {/* <AssetPage /> */}
    </main>
    <Footer />
  </>
);

export default App;