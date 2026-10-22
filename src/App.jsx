import { Routes, Route } from 'react-router-dom'
import { StoreProvider } from './components/StoreContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import InfoPage from './pages/InfoPage'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <StoreProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<InfoPage type="about" />} />
          <Route path="/faq" element={<InfoPage type="faq" />} />
          <Route path="/contact" element={<InfoPage type="contact" />} />
          <Route path="/shipping" element={<InfoPage type="shipping" />} />
          <Route path="/returns" element={<InfoPage type="returns" />} />
          <Route path="/privacy" element={<InfoPage type="privacy" />} />
          <Route path="/terms" element={<InfoPage type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </StoreProvider>
  )
}
