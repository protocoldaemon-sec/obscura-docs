import EndpointHeader from '../../components/docs/EndpointHeader'
import RequestBody from '../../components/docs/RequestBody'
import ResponseExample from '../../components/docs/ResponseExample'
import CodeBlock from '../../components/ui/CodeBlock'

export default function Deposit() {
  const fields = [
    { name: 'network', type: 'string', required: true, description: 'Network (solana, ethereum, polygon, arbitrum)' },
    { name: 'token', type: 'string', required: true, description: 'Token type (native, usdc, usdt)' },
    { name: 'amount', type: 'string', required: true, description: 'Amount as string' },
    { name: 'signature', type: 'string', required: true, description: 'Wallet signature' },
    { name: 'depositor', type: 'string', required: true, description: 'Depositor wallet address' },
  ]

  const exampleRequest = `{
  "network": "solana",
  "token": "native",
  "amount": "1.5",
  "signature": "abc123...",
  "depositor": "MqFdeJsRooZGgSwAsCeRnZ3y8v4CL9xpZDRNxbaQ8VN"
}`

  const successResponse = {
    success: true,
    depositId: "uuid-here",
    type: "deposit",
    stealthAddress: "hex-stealth-address",
    commitment: "hex-commitment",
    sourceChain: "solana",
    amount: "1.5",
    token: "native",
    expiresAt: 1768316257
  }

  const errorResponse = {
    error: "Missing required fields: network, token, amount, signature, depositor"
  }

  return (
    <div>
      <EndpointHeader
        method="POST"
        path="/api/v1/deposit"
        description="Create a deposit to the privacy vault. Deposits shield your tokens for private transactions."
      />

      <RequestBody fields={fields} />

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Example Request</h3>
        <CodeBlock code={exampleRequest} language="json" title="Request" />
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Responses</h3>
        <ResponseExample status={201} statusText="Created" body={successResponse} />
        <ResponseExample status={400} statusText="Bad Request" body={errorResponse} />
      </section>
    </div>
  )
}
