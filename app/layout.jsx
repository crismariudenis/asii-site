import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import CardList from '@/components/CardList'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Title',
  description: 'Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar/>
        </header>
        <main>
          <div className="max-w-3xl mx-auto p-4">
            {children}
            <CardList/>
          </div>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
