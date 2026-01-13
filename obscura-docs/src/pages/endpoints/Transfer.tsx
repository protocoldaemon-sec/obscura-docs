import EndpointHeader from '../../components/docs/EndpointHeader'
import RequestBody from '../../components/docs/RequestBody'
import ResponseExample from '../../components/docs/ResponseExample'
import CodeBlock from '../../components/ui/CodeBlock'
import Table from '../../components/ui/Table'
import ChainLogo from '../../components/ui/ChainLogo'

export default function Transfer() {
  const fields = [
    { name: 'recipient', type: 'string', required: true, description: 'Recipient wallet address' },
    { name: 'asset', type: 'string', required: true, description: 'Token contract address' },
    { name: 'amount', type: 'string', required: true, description: 'Amount as string (supports bigint)' },
    { name: 'sourceChain', type: 'string', required: true, description: 'Source chain (solana, ethereum, polygon, arbitrum)' },
    { name: 'targetChain', type: 'string', required: false, description: 'Target chain (defaults to sourceChain)' },
    { name: 'privacyLevel', type: 'string', required: false, description: 'transparent, shielded, compliant (default: shielded)' },
  ]

  const ethereumExample = `{
  "recipient": "0x1234567890123456789012345678901234567890",
  "asset": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "amount": "1000000",
  "sourceChain": "ethereum",
  "privacyLevel": "shielded"
}`

  const solanaExample = `{
  "recipient": "MqFdeJsRooZGgSwAsCeRnZ3y8v4CL9xpZDRNxbaQ8VN",
  "asset": "So11111111111111111111111111111111111111112",
  "amount": "1000000000",
  "sourceChain": "solana",
  "privacyLevel": "shielded"
}`

  const successResponse = {
    success: true,
    intentId: "188c73a6-ecb7-41d4-98cc-07a7100f229b",
    type: "transfer",
    stealthAddress: "028a02a649f8e89b9b552203e9d92dc4f10b3f43c43e4936dcbe898a189048cd71",
    commitment: "e320e22c54666fcd00414be00f8721eac463c624e2cd4826aa98474b96bb0212",
    sourceChain: "ethereum",
    targetChain: "ethereum",
    expiresAt: 1768316257
  }

  const errorResponse = {
    error: "Missing required fields: recipient, asset, amount, sourceChain"
  }

  const chainsData = [
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="solana" size="sm" /><span>solana</span></div>, description: 'Solana network' },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="ethereum" size="sm" /><span>ethereum</span></div>, description: 'Ethereum mainnet/testnet' },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="polygon" size="sm" /><span>polygon</span></div>, description: 'Polygon network' },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="arbitrum" size="sm" /><span>arbitrum</span></div>, description: 'Arbitrum L2' },
  ]

  const privacyData = [
    { level: 'transparent', description: 'All visible (for debugging/auditing)' },
    { level: 'shielded', description: 'Maximum privacy (sender, recipient, amount hidden)' },
    { level: 'compliant', description: 'Encrypted with viewing keys (regulatory friendly)' },
  ]

  return (
    <div>
      <EndpointHeader
        method="POST"
        path="/api/v1/transfer"
        description="Create a private transfer intent. Transfers can be same-chain or cross-chain with configurable privacy levels."
      />

      <RequestBody fields={fields} />

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Supported Chains</h3>
        <Table
          columns={[
            { key: 'chain', header: 'Chain' },
            { key: 'description', header: 'Description' },
          ]}
          data={chainsData}
        />
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Privacy Levels</h3>
        <Table
          columns={[
            { key: 'level', header: 'Level' },
            { key: 'description', header: 'Description' },
          ]}
          data={privacyData}
        />
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Example Requests</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[var(--text-secondary)] mb-2">Ethereum Transfer</p>
            <CodeBlock code={ethereumExample} language="json" title="Request" />
          </div>
          <div>
            <p className="text-sm text-[var(--text-secondary)] mb-2">Solana Transfer</p>
            <CodeBlock code={solanaExample} language="json" title="Request" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Responses</h3>
        <ResponseExample status={201} statusText="Created" body={successResponse} />
        <ResponseExample status={400} statusText="Bad Request" body={errorResponse} />
      </section>
    </div>
  )
}
