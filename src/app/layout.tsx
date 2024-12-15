import type { Metadata } from "next";

import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/app/components/BootstrapClient';
import "./lib/fontawesome";
import "./globals.css";

import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Maxi Rens - en vaskeri i hjertet af København",
  description: "Maxi Rens desc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <header>
          <SiteHeader></SiteHeader>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <SiteFooter></SiteFooter>
        </footer>
      </body>
      <BootstrapClient></BootstrapClient>
    </html>
  );
}
