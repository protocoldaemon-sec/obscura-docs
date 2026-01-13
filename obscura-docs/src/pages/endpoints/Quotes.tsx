import EndpointHeader from '../../components/docs/EndpointHeader'
import RequestBody from '../../components/docs/RequestBody'
import ResponseExample from '../../components/docs/ResponseExample'
import CodeBlock from '../../components/ui/CodeBlock'

export default function Quotes() {
  const fields = [
    { name: 'sourceChain', type: 'string', required: true, description: 'Source chain' },
    { name: 'targetChain', type: 'string', required: true, description: 'Target chain' },
    { name: 'inputAsset', type: 'string', required: true, description: 'Input asset address' },
    { name: 'outputAsset', type: 'string', required: true, description: 'Output asset address' },
    { name: 'amount', type: 'string', required: true, description: 'Amount as string' },
    { name: 'slippageBps', type: 'number', required: false, description: 'Slippage in basis points (default: 50 = 0.5%)' },
  ]

  const exampleRequest = `{
  "sourceChain": "ethereum",
  "targetChain": "polygon",
  "inputAsset": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "outputAsset": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "amount": "1000000000",
  "slippageBps": 50
}`

  const successResponse = {
    success: true,
    quotes: [
      {
        id: "quote-001",
        solverId: "solver-alpha",
        inputAmount: "1000000000",
        outputAmount: "999500000",
        fee: "500000",
        gasEstimate: "150000",
        expiresAt: 1768316500,
        estimatedTime: 120,
        solverReputation: 98
      },
      {
        id: "quote-002",
        solverId: "solver-beta",
        inputAmount: "1000000000",
        outputAmount: "998000000",
        fee: "400000",
        gasEstimate: "140000",
        expiresAt: 1768316500,
        estimatedTime: 90,
        solverReputation: 95
      }
    ]
  }

  return (
    <div>
      <EndpointHeader
        method="POST"
        path="/api/v1/quotes"
        description="Get quotes for an intent. Returns multiple quotes from different solvers for comparison."
      />

      <RequestBody fields={fields} />

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Example Request</h3>
        <CodeBlock code={exampleRequest} language="json" title="Request" />
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Response</h3>
        <ResponseExample status={200} statusText="OK" body={successResponse} />
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Quote Fields</h3>
        <ul className="space-y-2 text-[var(--text-secondary)]">
          <li><code className="text-[var(--accent-secondary)]">id</code> - Unique quote identifier</li>
          <li><code className="text-[var(--accent-secondary)]">solverId</code> - Solver providing the quote</li>
          <li><code className="text-[var(--accent-secondary)]">inputAmount</code> - Amount you send</li>
          <li><code className="text-[var(--accent-secondary)]">outputAmount</code> - Amount you receive</li>
          <li><code className="text-[var(--accent-secondary)]">fee</code> - Solver fee</li>
          <li><code className="text-[var(--accent-secondary)]">gasEstimate</code> - Estimated gas cost</li>
          <li><code className="text-[var(--accent-secondary)]">expiresAt</code> - Quote expiration timestamp</li>
          <li><code className="text-[var(--accent-secondary)]">estimatedTime</code> - Estimated settlement time in seconds</li>
          <li><code className="text-[var(--accent-secondary)]">solverReputation</code> - Solver reputation score (0-100)</li>
        </ul>
      </section>
    </div>
  )
}
