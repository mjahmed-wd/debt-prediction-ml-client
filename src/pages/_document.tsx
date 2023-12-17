/* eslint-disable @next/next/no-sync-scripts */
import Footer from 'common/footer';
import Header from 'common/header';
import { Head, Html, Main, NextScript } from 'next/document';

import PrelineScript from '../../app/components/PrelineScript';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
        <PrelineScript />
      </body>
    </Html>
  );
}
