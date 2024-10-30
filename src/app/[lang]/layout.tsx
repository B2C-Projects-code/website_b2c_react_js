import * as React from 'react';
import "slick-carousel/slick/slick.css";
import '@src/css/slick-theme.css'
import ThemeRegistry from '@themes/ThemeRegistry';
import { StoreProvider } from '@lib/redux/providers';
import { i18n } from 'i18n-config';
import { Toaster } from 'react-hot-toast';
import { BottomNavigation, Footer, Header } from '@src/components/base';
import { Mulish, Poppins } from 'next/font/google';
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export const metadata = {
  title: 'Soghat',
  description: '',
};
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const mulish = Mulish({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={params.lang}>
      <body className={poppins.className}>
        <StoreProvider>
          <ThemeRegistry lang={params.lang}>
            <Toaster />
            <Header />
            {children}
            <Footer />
            <BottomNavigation />
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
