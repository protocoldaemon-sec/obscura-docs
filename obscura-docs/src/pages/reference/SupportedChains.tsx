import Table from '../../components/ui/Table'
import Badge from '../../components/ui/Badge'
import ChainLogo from '../../components/ui/ChainLogo'

export default function SupportedChains() {
  const chains = [
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="solana" size="sm" /><span>Solana</span></div>, chainId: 'solana', type: 'SVM', status: <Badge variant="get">Active</Badge> },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="ethereum" size="sm" /><span>Ethereum</span></div>, chainId: 'ethereum', type: 'EVM', status: <Badge variant="get">Active</Badge> },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="polygon" size="sm" /><span>Polygon</span></div>, chainId: 'polygon', type: 'EVM', status: <Badge variant="get">Active</Badge> },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="arbitrum" size="sm" /><span>Arbitrum</span></div>, chainId: 'arbitrum', type: 'EVM', status: <Badge variant="get">Active</Badge> },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Supported Chains</h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Obscura supports multiple blockchain networks for private transactions.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Available Chains</h2>
        <Table
          columns={[
            { key: 'chain', header: 'Chain' },
            { key: 'chainId', header: 'Chain ID' },
            { key: 'type', header: 'Type' },
            { key: 'status', header: 'Status' },
          ]}
          data={chains}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Chain Types</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">EVM (Ethereum Virtual Machine)</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Ethereum-compatible chains including Ethereum mainnet, Polygon, and Arbitrum. 
              These chains use the same address format (0x...) and support ERC-20 tokens.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">SVM (Solana Virtual Machine)</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Solana network with its own address format and SPL token standard. 
              Addresses are base58-encoded public keys.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Cross-Chain Transfers</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          Obscura supports cross-chain transfers between any supported chains. 
          Specify different <code className="text-[var(--accent-secondary)]">sourceChain</code> and 
          <code className="text-[var(--accent-secondary)]"> targetChain</code> values in your transfer request.
        </p>
        <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-muted)]">
            Note: Cross-chain transfers may take longer to settle due to bridge operations.
          </p>
        </div>
      </section>
    </div>
  )
}
