/* eslint-disable @next/next/no-sync-scripts */
import Footer from 'common/footer';
import Header from 'common/header';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
