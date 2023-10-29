import Footer from 'common/footer';
import Header from 'common/header';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Script
          src='/node_modules/preline/dist/preline.js'
          strategy='lazyOnload'
        />
        <Footer />
      </body>
    </Html>
  );
}
