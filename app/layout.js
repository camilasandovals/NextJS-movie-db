import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Movie Database',
  description: 'IMDB-like cline built in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-zinc-900"}>
        {children}</body>
    </html>
  )
}
