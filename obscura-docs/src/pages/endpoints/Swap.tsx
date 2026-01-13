import EndpointHeader from '../../components/docs/EndpointHeader'
import RequestBody from '../../components/docs/RequestBody'
import ResponseExample from '../../components/docs/ResponseExample'
import CodeBlock from '../../components/ui/CodeBlock'

export default function Swap() {
  const fields = [
    { name: 'tokenIn', type: 'string', required: true, description: 'Input token address' },
    { name: 'tokenOut', type: 'string', required: true, description: 'Output token address' },
    { name: 'amountIn', type: 'string', required: true, description: 'Input amount as string' },
    { name: 'minAmountOut', type: 'string', required: true, description: 'Minimum output amount' },
    { name: 'deadline', type: 'number', required: false, description: 'Unix timestamp deadline' },
    { name: 'privacyLevel', type: 'string', required: false, description: 'transparent, shielded, compliant' },
  ]

  const exampleRequest = `{
  "tokenIn": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "tokenOut": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "amountIn": "1000000",
  "minAmountOut": "990000",
  "privacyLevel": "shielded"
}`

  const successResponse = {
    success: true,
    intentId: "991771ee-a91e-40a9-bd33-d5630da03be6",
    type: "swap",
    stealthAddress: "038654c971eaec6acea9fcdd988d08d1089aa70a7c84efd56495884d0e137e63e1",
    commitment: "6fe389331c033f38c5f74c212cccec0b0b56c15480fb95f6b46072f220fced7b",
    expiresAt: 1768316266
  }

  return (
    <div>
      <EndpointHeader
        method="POST"
        path="/api/v1/swap"
        description="Create a private swap intent. Swaps are executed with MEV protection and configurable slippage."
      />

      <RequestBody fields={fields} />

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Example Request</h3>
        <CodeBlock code={exampleRequest} language="json" title="Request" />
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Response</h3>
        <ResponseExample status={201} statusText="Created" body={successResponse} />
      </section>
    </div>
  )
}
