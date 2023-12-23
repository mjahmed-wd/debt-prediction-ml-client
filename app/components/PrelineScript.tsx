'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import('preline/preline');
    import('@preline/overlay');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // HSStaticMethods.autoInit();
    }, 100);
  }, [path]);

  return null;
}
