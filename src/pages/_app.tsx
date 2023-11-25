'use client';
import type { AppProps } from 'next/app';
import('preline');
import('@preline/overlay');

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
