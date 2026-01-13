import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Overview from './pages/Overview'
import Transfer from './pages/endpoints/Transfer'
import Deposit from './pages/endpoints/Deposit'
import Swap from './pages/endpoints/Swap'
import Intents from './pages/endpoints/Intents'
import Batches from './pages/endpoints/Batches'
import Pools from './pages/endpoints/Pools'
import Quotes from './pages/endpoints/Quotes'
import ErrorCodes from './pages/reference/ErrorCodes'
import SupportedChains from './pages/reference/SupportedChains'
import Cryptography from './pages/reference/Cryptography'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/endpoints/transfer" element={<Transfer />} />
        <Route path="/endpoints/deposit" element={<Deposit />} />
        <Route path="/endpoints/swap" element={<Swap />} />
        <Route path="/endpoints/intents" element={<Intents />} />
        <Route path="/endpoints/batches" element={<Batches />} />
        <Route path="/endpoints/pools" element={<Pools />} />
        <Route path="/endpoints/quotes" element={<Quotes />} />
        <Route path="/reference/errors" element={<ErrorCodes />} />
        <Route path="/reference/chains" element={<SupportedChains />} />
        <Route path="/reference/cryptography" element={<Cryptography />} />
      </Routes>
    </Layout>
  )
}

export default App
