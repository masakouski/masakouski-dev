'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';

/**
 * Подпись видна сразу, адрес подставляется в href уже в браузере —
 * в статическом HTML его нет.
 */
export function EmailLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const [href, setHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHref(`mailto:${site.email.user}@${site.email.domain}`);
  }, []);

  return (
    <a className={className} href={href} rel="nofollow">
      {children}
    </a>
  );
}
