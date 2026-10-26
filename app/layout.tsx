import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bookly | Modern Dental Care',
  description: 'Book your dental appointment online with ease. Professional, gentle, and modern dental care.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}