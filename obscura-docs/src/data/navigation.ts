import type { NavGroup } from '../components/layout/Sidebar'

export const navigation: NavGroup[] = [
  {
    title: 'Getting Started',
    icon: 'book',
    items: [
      { title: 'Overview', href: '/' },
    ],
    defaultOpen: true,
  },
  {
    title: 'Status',
    icon: 'activity',
    items: [
      { title: 'Health & Status', href: '/endpoints/status' },
    ],
    defaultOpen: true,
  },
  {
    title: 'Privacy Transfers',
    icon: 'shield',
    items: [
      { title: 'Deposit', href: '/endpoints/deposit' },
      { title: 'Withdraw', href: '/endpoints/withdraw' },
    ],
    defaultOpen: true,
  },
  {
    title: 'Batches',
    icon: 'layers',
    items: [
      { title: 'Batch Management', href: '/endpoints/batches' },
    ],
    defaultOpen: true,
  },
  {
    title: 'Relayer',
    icon: 'send',
    items: [
      { title: 'Relayer Service', href: '/endpoints/relayer' },
    ],
    defaultOpen: true,
  },
  {
    title: 'Reference',
    icon: 'file-text',
    items: [
      { title: 'Error Codes', href: '/reference/errors' },
      { title: 'Supported Chains', href: '/reference/chains' },
      { title: 'Cryptography', href: '/reference/cryptography' },
      { title: 'ZK Compression', href: '/reference/zk-compression' },
      { title: 'LLM Documentation', href: '/reference/llm-docs' },
    ],
    defaultOpen: true,
  },
]
