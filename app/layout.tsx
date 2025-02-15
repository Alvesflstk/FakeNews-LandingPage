import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'O Impacto da Fake News',
  description: 'criados pelos academicos da unyleya',
  generator: 'gabriel alves',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
