// app/layout.js
import './globals.css';
import { Bangers, Inter } from 'next/font/google';

const bangers = Bangers({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bangers',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Comic Arambh - Stand-up Comedian & Poet',
  description: 'Stand-up comedian and poet performing hilarious shows across India',
  keywords: 'comedy, stand-up, poet, shayari, performer, India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bangers.variable} ${inter.variable}`}>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}