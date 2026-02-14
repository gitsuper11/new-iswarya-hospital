import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Iswarya Hospital - Quaternary Care Excellence',
  description: 'Leading multi-specialty hospital in Chennai offering advanced healthcare services with expert doctors and state-of-the-art facilities.',
  keywords: 'hospital, healthcare, doctors, Chennai, OMR, treatments, surgery',
  metadataBase: new URL('https://iswarya.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-light-blue-bg`}>
        <Header />
        <main className="pt-16 pb-24 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
