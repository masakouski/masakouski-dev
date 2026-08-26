'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import styles from './EmailAddress.module.css';

/**
 * Адрес показывается целиком — его можно выделить, кликнуть или скопировать
 * кнопкой. При этом в статическом HTML его нет: строка собирается уже
 * в браузере, после монтирования, чтобы её не подобрали спам-парсеры.
 */
export function EmailAddress() {
  const [address, setAddress] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAddress(`${site.email.user}@${site.email.domain}`);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch {
      // Буфер обмена недоступен — адрес всё равно виден и выделяется руками.
    }
  }

  return (
    <span className={styles.wrap}>
      <a className={styles.address} href={address ? `mailto:${address}` : undefined} rel="nofollow">
        {address}
      </a>
      <button type="button" className={styles.copy} onClick={copy} disabled={!address}>
        {copied ? 'copied' : 'copy'}
      </button>
    </span>
  );
}
