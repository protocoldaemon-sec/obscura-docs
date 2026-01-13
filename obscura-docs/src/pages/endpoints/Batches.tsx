import EndpointHeader from '../../components/docs/EndpointHeader'
import ResponseExample from '../../components/docs/ResponseExample'
import Badge from '../../components/ui/Badge'

export default function Batches() {
  const getBatchesResponse = {
    count: 2,
    batches: [
      {
        batchId: "batch-001",
        chain: "ethereum",
        intentCount: 15,
        createdAt: 1768316200
      },
      {
        batchId: "batch-002",
        chain: "polygon",
        intentCount: 8,
        createdAt: 1768316250
      }
    ]
  }

  const flushResponse = {
    success: true,
    settledBatches: 2,
    records: [
      {
        batchId: "batch-001",
        chain: "ethereum",
        txHash: "0x123...",
        status: "settled",
        gasUsed: "150000"
      },
      {
        batchId: "batch-002",
        chain: "polygon",
        txHash: "0x456...",
        status: "settled",
        gasUsed: "120000"
      }
    ]
  }

  return (
    <div>
      <div className="mb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="get">GET</Badge>
            <code className="text-lg font-mono text-[var(--text-primary)]">/api/v1/batches</code>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Get pending batches. Intents are grouped into batches for gas-efficient settlement.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Response</h3>
          <ResponseExample status={200} statusText="OK" body={getBatchesResponse} />
        </section>
      </div>

      <hr className="border-[var(--border-color)] my-8" />

      <div>
        <EndpointHeader
          method="POST"
          path="/api/v1/batches/flush"
          description="Force flush all pending batches for settlement. Use this to immediately settle all pending intents."
        />

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Response</h3>
          <ResponseExample status={200} statusText="OK" body={flushResponse} />
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Notes</h3>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <li>Batches are automatically flushed when they reach a certain size or age</li>
            <li>Manual flush is useful for testing or when immediate settlement is required</li>
            <li>Each batch is settled in a single transaction per chain</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
