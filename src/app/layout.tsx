import React from 'react';
import '../app/globals.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll';
import ClientWrapper from '@/utils/clientWrapper';
import Head from 'next/head';

export default function RootLayout({
  children,
  showHeader = true,
  showFooter = true,
  className = '',
}: {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}) {
  return (
    <html lang="en" className="w-full">
      <body className={className}>
        <Head>
          <meta name="robots" content="index, follow" />
        </Head>
        {showHeader && <Header />}
        <SmoothScroll>
          <ClientWrapper>{children}</ClientWrapper>
        </SmoothScroll>
        {showFooter && <Footer />}
      </body>
    </html>
  );
}
