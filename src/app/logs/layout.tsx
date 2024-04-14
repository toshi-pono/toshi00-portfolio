import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'logs',
}

export default function LogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
