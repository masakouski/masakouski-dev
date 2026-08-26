'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';

/**
 * В статическом HTML остаётся только подпись "Email" — сам адрес
 * собирается уже в браузере, после монтирования. Спам-парсеры,
 * читающие голый HTML, ничего не находят.
 */
export function EmailLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const [href, setHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHref(`mailto:${site.email.user}@${site.email.domain}`);
  }, []);

  return (
    <a className={className} href={href ?? '#'} rel="nofollow">
      {children}
    </a>
  );
}
