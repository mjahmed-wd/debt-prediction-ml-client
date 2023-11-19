'use client';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('preline');
    import('@preline/overlay');
  }, []);
  return <Component {...pageProps} />;
}
