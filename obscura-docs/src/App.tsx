import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Overview from './pages/Overview'
import Status from './pages/endpoints/Status'
import Deposit from './pages/endpoints/Deposit'
import Withdraw from './pages/endpoints/Withdraw'
import Batches from './pages/endpoints/Batches'
import Relayer from './pages/endpoints/Relayer'
import ErrorCodes from './pages/reference/ErrorCodes'
import SupportedChains from './pages/reference/SupportedChains'
import Cryptography from './pages/reference/Cryptography'
import ZkCompression from './pages/reference/ZkCompression'
import LlmDocs from './pages/reference/LlmDocs'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/endpoints/status" element={<Status />} />
        <Route path="/endpoints/deposit" element={<Deposit />} />
        <Route path="/endpoints/withdraw" element={<Withdraw />} />
        <Route path="/endpoints/batches" element={<Batches />} />
        <Route path="/endpoints/relayer" element={<Relayer />} />
        <Route path="/reference/errors" element={<ErrorCodes />} />
        <Route path="/reference/chains" element={<SupportedChains />} />
        <Route path="/reference/cryptography" element={<Cryptography />} />
        <Route path="/reference/zk-compression" element={<ZkCompression />} />
        <Route path="/reference/llm-docs" element={<LlmDocs />} />
      </Routes>
    </Layout>
  )
}

export default App
