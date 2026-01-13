import EndpointHeader from '../../components/docs/EndpointHeader'
import RequestBody from '../../components/docs/RequestBody'
import ResponseExample from '../../components/docs/ResponseExample'
import CodeBlock from '../../components/ui/CodeBlock'
import Badge from '../../components/ui/Badge'
import Table from '../../components/ui/Table'

export default function Pools() {
  const createFields = [
    { name: 'merkleRoot', type: 'string', required: true, description: 'Hex-encoded merkle root (64 chars)' },
    { name: 'totalKeys', type: 'number', required: true, description: 'Total number of keys in pool' },
    { name: 'params', type: 'object', required: false, description: 'WOTS parameters (w, n)' },
    { name: 'owner', type: 'string', required: false, description: 'Pool owner address' },
  ]

  const exampleRequest = `{
  "merkleRoot": "a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890ab",
  "totalKeys": 1000,
  "params": {"w": 16, "n": 32}
}`

  const createResponse = {
    success: true,
    merkleRoot: "a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890ab",
    totalKeys: 1000,
    registeredAt: 1768312696778
  }

  const getResponse = {
    root: "a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890ab",
    totalKeys: 1000,
    params: {
      w: 16,
      n: 32,
      len1: 64,
      len2: 3,
      len: 67
    },
    registeredAt: 1768312696778
  }

  const wotsParams = [
    { param: 'w', default: '16', description: 'Winternitz parameter' },
    { param: 'n', default: '32', description: 'Hash output length' },
    { param: 'len1', default: '64', description: 'Derived: ceil(8n/log2(w))' },
    { param: 'len2', default: '3', description: 'Derived: floor(log2(len1(w-1))/log2(w)) + 1' },
    { param: 'len', default: '67', description: 'Total signature length: len1 + len2' },
  ]

  return (
    <div>
      <div className="mb-12">
        <EndpointHeader
          method="POST"
          path="/api/v1/pools"
          description="Register a WOTS key pool. Key pools enable post-quantum secure authorization using Winternitz One-Time Signatures."
        />

        <RequestBody fields={createFields} />

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">WOTS Parameters</h3>
          <Table
            columns={[
              { key: 'param', header: 'Parameter' },
              { key: 'default', header: 'Default' },
              { key: 'description', header: 'Description' },
            ]}
            data={wotsParams}
          />
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Example Request</h3>
          <CodeBlock code={exampleRequest} language="json" title="Request" />
        </section>

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
            <code className="text-lg font-mono text-[var(--text-primary)]">/api/v1/pools/:merkleRoot</code>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Get pool information by merkle root. Returns the pool configuration and registration details.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Path Parameters</h3>
          <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <code className="text-[var(--accent-secondary)]">merkleRoot</code>
            <span className="text-[var(--text-muted)] ml-2">- The hex-encoded merkle root of the key pool</span>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Response</h3>
          <ResponseExample status={200} statusText="OK" body={getResponse} />
        </section>
      </div>
    </div>
  )
}
