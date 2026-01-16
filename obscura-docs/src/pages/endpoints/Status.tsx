import ResponseExample from '../../components/docs/ResponseExample'
import Badge from '../../components/ui/Badge'

export default function Status() {
  const rootResponse = {
    name: "Obscura API",
    version: "0.4.1",
    description: "Post-quantum secure intent settlement API with true privacy",
    endpoints: {
      health: "/health",
      privacy: "/api/v1/privacy/status",
      solana: "/api/v1/solana/status",
      evm: "/api/v1/evm/status",
      deposit: "/api/v1/deposit",
      withdraw: "/api/v1/withdraw",
      batches: "/api/v1/batches",
      relayer: "/api/v1/relayer"
    }
  }

  const healthResponse = {
    status: "healthy",
    timestamp: 1768491234567,
    uptime: 3600,
    services: {
      auth: "ready",
      aggregator: "ready",
      solana: "ready",
      evm: "ready"
    }
  }

  const privacyResponse = {
    arcium: {
      configured: true,
      clusterOffset: "123",
      programId: "arcaborPMqYhZbLqPKPRXpBKyCMgH8kApNoxp4cLKg"
    },
    lightProtocol: {
      configured: true,
      photonUrl: "https://devnet.helius-rpc.com"
    }
  }

  const solanaResponse = {
    configured: true,
    programId: "GG9U34H1xXkuzvv8Heoy4UWav5vUgrQFEVwrYMi84QuE",
    vaultPda: "6owJu2yXoPvTbM67XwmRguVRQhCADaswHkAVhVHSvoH7",
    vaultStatePda: "5L1Vh6ftZWncYc1SEdZsoEX4DKaqCY6ZoQ3CdcEqursB",
    balance: "1234567890"
  }

  const evmResponse = {
    configured: true,
    network: "sepolia",
    vaultAddress: "0xc4937Ba6418eE72EDABF72694198024b5a3599CC",
    settlementAddress: "0x88dA9c5D9801cb33615f0A516eb1098dF1889DA9",
    balance: "1000000000000000000"
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Health & Status</h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Endpoints for checking API health and configuration status.
      </p>

      <div className="space-y-12">
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="get">GET</Badge>
              <code className="text-lg font-mono text-[var(--text-primary)]">/</code>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Get API information and available endpoints.
            </p>
          </div>
          <ResponseExample status={200} statusText="OK" body={rootResponse} />
        </div>

        <hr className="border-[var(--border-color)]" />

        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="get">GET</Badge>
              <code className="text-lg font-mono text-[var(--text-primary)]">/health</code>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Health check endpoint. Returns service status and uptime.
            </p>
          </div>
          <ResponseExample status={200} statusText="OK" body={healthResponse} />
        </div>

        <hr className="border-[var(--border-color)]" />

        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="get">GET</Badge>
              <code className="text-lg font-mono text-[var(--text-primary)]">/api/v1/privacy/status</code>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Get privacy layer configuration status including Arcium and Light Protocol.
            </p>
          </div>
          <ResponseExample status={200} statusText="OK" body={privacyResponse} />
        </div>

        <hr className="border-[var(--border-color)]" />

        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="get">GET</Badge>
              <code className="text-lg font-mono text-[var(--text-primary)]">/api/v1/solana/status</code>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Get Solana settlement status including program ID, vault addresses, and balance.
            </p>
          </div>
          <ResponseExample status={200} statusText="OK" body={solanaResponse} />
        </div>

        <hr className="border-[var(--border-color)]" />

        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="get">GET</Badge>
              <code className="text-lg font-mono text-[var(--text-primary)]">/api/v1/evm/status</code>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Get EVM settlement status including vault and settlement contract addresses.
            </p>
          </div>
          <ResponseExample status={200} statusText="OK" body={evmResponse} />
        </div>
      </div>
    </div>
  )
}
