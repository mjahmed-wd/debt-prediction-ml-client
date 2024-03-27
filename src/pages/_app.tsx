'use client';
import type { AppProps } from 'next/app';

import 'react-chat-widget/lib/styles.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
