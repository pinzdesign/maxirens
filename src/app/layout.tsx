import type { Metadata } from "next";
import localFont from "next/font/local";

import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/app/components/BootstrapClient';
import "./lib/fontawesome";
import "./globals.css";

import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';

import { Dr_Sugiyama, Della_Respira, Inter } from 'next/font/google';

const drSugiyama = Dr_Sugiyama({ subsets: ['latin'], weight: '400' });
const dellaRespira = Della_Respira({ subsets: ['latin'], weight: '400' });
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
        <SiteHeader></SiteHeader>
        {children}
        <SiteFooter></SiteFooter>
      </body>
      <BootstrapClient></BootstrapClient>
    </html>
  );
}
