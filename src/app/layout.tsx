import type { Metadata } from "next";
import { Dr_Sugiyama, Della_Respira, Inter } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/app/components/BootstrapClient';

import "./lib/fontawesome";
import "./globals.css";

import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';

const drSugiyama = Dr_Sugiyama({ subsets: ['latin'], weight: '400' });
const dellaRespira = Della_Respira({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Maxi Rens - en vaskeri i hjertet af København",
  description: "Maxi Rens er en vaskeri i hjertet af København. Alt indenfor rens, vask og reparation af tøj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${inter.className} ${drSugiyama.className} ${dellaRespira.className}`}>
        <header>
          <SiteHeader></SiteHeader>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <SiteFooter></SiteFooter>
        </footer>
        <BootstrapClient></BootstrapClient>
      </body>
    </html>
  );
}
