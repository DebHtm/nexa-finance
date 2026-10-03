import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AssetPage from './pages/AssetPage'
import MarketsPage from './pages/MarketsPage'
import PortfolioPage from './pages/PortfolioPage'
import { Route, Routes } from 'react-router-dom'

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/markets">
          <Route index element={<MarketsPage />} />
          <Route path=":id" element={<AssetPage />} />
        </Route>
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </main>
    <Footer />
  </>
)

export default App
