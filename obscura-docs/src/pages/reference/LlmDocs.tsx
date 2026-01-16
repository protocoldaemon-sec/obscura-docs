import { FileText, Download, ExternalLink } from 'lucide-react'
import CodeBlock from '../../components/ui/CodeBlock'

export default function LlmDocs() {
  const exampleUsage = `# Using with AI assistants
curl https://docs.obscura.com/obscura-llms.txt

# Or reference directly in your prompt:
"Read the API docs at /obscura-llms.txt and help me integrate Obscura"`

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">LLM Documentation</h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Machine-readable documentation optimized for AI assistants and LLMs.
      </p>

      <section className="mb-8">
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[var(--accent-secondary)]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">obscura-llms.txt</h2>
              <p className="text-sm text-[var(--text-muted)]">Complete API reference in plain text format</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <a
              href="/obscura-llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              View File
            </a>
            <a
              href="/obscura-llms.txt"
              download="obscura-llms.txt"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg hover:bg-[var(--border-color)] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">What is llms.txt?</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          The <code className="text-[var(--accent-secondary)]">llms.txt</code> file is a standardized format for providing 
          documentation to AI assistants and Large Language Models. It contains all API endpoints, request/response formats, 
          and usage examples in a single, easy-to-parse text file.
        </p>
        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <p className="text-[var(--text-secondary)] text-sm">
            💡 Use this file when asking AI assistants to help you integrate with the Obscura API. 
            Simply reference the URL or paste the contents into your conversation.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Usage</h2>
        <CodeBlock code={exampleUsage} language="bash" title="Example" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Contents</h2>
        <ul className="space-y-2 text-[var(--text-secondary)]">
          <li>• Complete API endpoint documentation</li>
          <li>• Request/response JSON schemas</li>
          <li>• Authentication and security details</li>
          <li>• Privacy architecture explanation</li>
          <li>• Example flows and code snippets</li>
          <li>• Error codes and troubleshooting</li>
          <li>• Supported chains and contracts</li>
        </ul>
      </section>
    </div>
  )
}
