import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Adam's Forum",
  description: 'A cool new forum on the block. Join or miss out!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModal />
        <Navbar />

        {children}
      </body>
    </html>
  )
}
