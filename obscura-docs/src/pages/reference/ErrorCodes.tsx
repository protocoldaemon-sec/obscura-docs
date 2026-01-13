import Table from '../../components/ui/Table'
import CodeBlock from '../../components/ui/CodeBlock'

export default function ErrorCodes() {
  const errorCodes = [
    { http: '400', error: 'Missing required fields', description: 'Request validation failed' },
    { http: '404', error: 'Not found', description: 'Resource not found' },
    { http: '500', error: 'Failed to create intent', description: 'Server error during processing' },
    { http: '500', error: 'Internal error', description: 'Unexpected server error' },
  ]

  const errorFormat = `{
  "error": "Error message",
  "details": "Additional error details"
}`

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Error Codes</h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Reference for all error codes returned by the Obscura API.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">HTTP Error Codes</h2>
        <Table
          columns={[
            { key: 'http', header: 'HTTP' },
            { key: 'error', header: 'Error' },
            { key: 'description', header: 'Description' },
          ]}
          data={errorCodes}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Error Response Format</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          All error responses follow this format:
        </p>
        <CodeBlock code={errorFormat} language="json" title="Error Response" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Common Errors</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Missing Required Fields</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Ensure all required fields are included in your request body. Check the endpoint documentation for required fields.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Invalid Chain</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Use one of the supported chains: solana, ethereum, polygon, arbitrum.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Invalid Amount Format</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Amounts must be strings representing the token amount in its smallest unit (e.g., wei for ETH).
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
