import EndpointHeader from '../../components/docs/EndpointHeader'
import RequestBody from '../../components/docs/RequestBody'
import ResponseExample from '../../components/docs/ResponseExample'
import Badge from '../../components/ui/Badge'

export default function Intents() {
  const createFields = [
    { name: 'action', type: 'string', required: true, description: 'transfer, swap' },
    { name: 'sourceChain', type: 'string', required: true, description: 'Source chain' },
    { name: 'targetChain', type: 'string', required: false, description: 'Target chain' },
    { name: 'asset', type: 'string', required: true, description: 'Asset address' },
    { name: 'amount', type: 'string', required: true, description: 'Amount as string' },
    { name: 'recipient', type: 'string', required: true, description: 'Recipient address' },
    { name: 'deadline', type: 'number', required: false, description: 'Unix timestamp' },
    { name: 'privacyLevel', type: 'string', required: false, description: 'Privacy level' },
    { name: 'data', type: 'string', required: false, description: 'Hex encoded extra data' },
  ]

  const createResponse = {
    success: true,
    intentId: "385b775c-6bbb-4220-a659-46c08502bb4d",
    stealthAddress: "03d0d2d815ff65ebf7205102a2c6d45a18f386c0e7750a4186d6738033ef9c4b70",
    commitment: "e1bbed21eee2d3383ba02b5cd2e8d7805433a975aba5ed2d1586de2b319cf031",
    expiresAt: 1768316277
  }

  const getResponse = {
    intentId: "385b775c-6bbb-4220-a659-46c08502bb4d",
    status: "pending",
    batchId: "batch-123",
    position: 5,
    createdAt: 1768316200,
    settledAt: null
  }

  return (
    <div>
      <div className="mb-12">
        <EndpointHeader
          method="POST"
          path="/api/v1/intents"
          description="Create a shielded intent (generic). This is the base endpoint for creating any type of intent."
        />

        <RequestBody fields={createFields} />

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Response</h3>
          <ResponseExample status={201} statusText="Created" body={createResponse} />
        </section>
      </div>

      <hr className="border-[var(--border-color)] my-8" />

      <div>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="get">GET</Badge>
            <code className="text-lg font-mono text-[var(--text-primary)]">/api/v1/intents/:intentId</code>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Get intent status by ID. Use this to track the progress of your intent through the settlement process.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Path Parameters</h3>
          <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <code className="text-[var(--accent-secondary)]">intentId</code>
            <span className="text-[var(--text-muted)] ml-2">- The unique intent identifier (UUID)</span>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Response</h3>
          <ResponseExample status={200} statusText="OK" body={getResponse} />
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Status Values</h3>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <li><code className="text-[var(--accent-secondary)]">pending</code> - Intent created, waiting for batch</li>
            <li><code className="text-[var(--accent-secondary)]">submitted</code> - Batch submitted to chain</li>
            <li><code className="text-[var(--accent-secondary)]">settled</code> - Intent successfully settled</li>
            <li><code className="text-[var(--accent-secondary)]">failed</code> - Intent failed to settle</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
