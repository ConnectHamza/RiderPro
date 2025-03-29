import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import './globals.css';
import type { AppProps } from 'next/app';
import RootLayout from './layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noHeaderFooterRoutes = ['/no-header-footer']; // Add routes where you don't want header and footer

  const showHeaderAndFooter = !noHeaderFooterRoutes.includes(router.pathname);

  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, []);

  return (
    <RootLayout  >
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;