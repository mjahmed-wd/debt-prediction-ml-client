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
        {/* <Script
          src='/node_modules/preline/dist/preline.js'
          strategy='lazyOnload'
        /> */}
        <script src='./node_modules/preline/dist/preline.js'></script>
        <Footer />
      </body>
    </Html>
  );
}
