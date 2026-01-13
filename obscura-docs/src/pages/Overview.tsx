import { ArrowRight, Shield, Zap, Lock, Globe } from 'lucide-react'
import Card from '../components/ui/Card'
import Table from '../components/ui/Table'
import ChainLogo from '../components/ui/ChainLogo'

export default function Overview() {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Post-Quantum Security',
      description: 'WOTS+ signatures provide quantum-resistant authorization for all transactions.',
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'Privacy-Preserving',
      description: 'Stealth addresses and Pedersen commitments hide transaction details.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Intent-Based',
      description: 'Express what you want to do, let solvers find the best execution path.',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Multi-Chain',
      description: 'Support for Solana, Ethereum, Polygon, and Arbitrum networks.',
    },
  ]

  const chainsData = [
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="solana" size="sm" /><span>Solana</span></div>, type: 'SVM', status: 'Active' },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="ethereum" size="sm" /><span>Ethereum</span></div>, type: 'EVM', status: 'Active' },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="polygon" size="sm" /><span>Polygon</span></div>, type: 'EVM', status: 'Active' },
    { chain: <div className="flex items-center gap-2"><ChainLogo chain="arbitrum" size="sm" /><span>Arbitrum</span></div>, type: 'EVM', status: 'Active' },
  ]

  const privacyLevels = [
    { level: 'transparent', description: 'All data visible', useCase: 'Debugging, auditing' },
    { level: 'shielded', description: 'Maximum privacy', useCase: 'Default, recommended' },
    { level: 'compliant', description: 'Viewing keys enabled', useCase: 'Regulatory compliance' },
  ]

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Obscura API Documentation
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
          Post-quantum secure intent settlement system combining WOTS+ signatures, 
          stealth addresses, and Pedersen commitments for private, cross-chain transactions.
        </p>
        <div className="mt-6 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-muted)]">Base URL</p>
          <code className="text-[var(--accent-secondary)] font-mono">
            https://obscura-api.daemonprotocol.com
          </code>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-secondary)]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">{feature.title}</h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="Transfer"
            description="Create private token transfers across supported chains."
            href="/endpoints/transfer"
            icon={<ArrowRight className="w-5 h-5" />}
          />
          <Card
            title="Swap"
            description="Execute private token swaps with MEV protection."
            href="/endpoints/swap"
            icon={<ArrowRight className="w-5 h-5" />}
          />
          <Card
            title="Deposit"
            description="Deposit tokens into the privacy vault."
            href="/endpoints/deposit"
            icon={<ArrowRight className="w-5 h-5" />}
          />
          <Card
            title="Pools"
            description="Register and manage WOTS key pools."
            href="/endpoints/pools"
            icon={<ArrowRight className="w-5 h-5" />}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Supported Chains</h2>
        <Table
          columns={[
            { key: 'chain', header: 'Chain' },
            { key: 'type', header: 'Type' },
            { key: 'status', header: 'Status' },
          ]}
          data={chainsData}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Privacy Levels</h2>
        <Table
          columns={[
            { key: 'level', header: 'Level' },
            { key: 'description', header: 'Description' },
            { key: 'useCase', header: 'Use Case' },
          ]}
          data={privacyLevels}
        />
      </section>
    </div>
  )
}
