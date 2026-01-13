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
    title: 'Endpoints',
    icon: 'code',
    items: [
      { title: 'Transfer', href: '/endpoints/transfer' },
      { title: 'Deposit', href: '/endpoints/deposit' },
      { title: 'Swap', href: '/endpoints/swap' },
      { title: 'Intents', href: '/endpoints/intents' },
      { title: 'Batches', href: '/endpoints/batches' },
      { title: 'Pools', href: '/endpoints/pools' },
      { title: 'Quotes', href: '/endpoints/quotes' },
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
    ],
    defaultOpen: true,
  },
]
