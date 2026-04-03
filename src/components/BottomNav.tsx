"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.css';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav}>
      <Link href="/home" className={`${styles.navItem} ${pathname === '/home' ? styles.active : ''}`}>
        <svg className={styles.icon} viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        <span>ホーム</span>
      </Link>
      <Link href="/search" className={`${styles.navItem} ${pathname?.startsWith('/search') ? styles.active : ''}`}>
        <svg className={styles.icon} viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        <span>検索</span>
      </Link>
      <Link href="/bulletin" className={`${styles.navItem} ${pathname?.startsWith('/bulletin') ? styles.active : ''}`}>
        <svg className={styles.icon} viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
        <span>掲示板</span>
      </Link>
      <Link href="/mypage" className={`${styles.navItem} ${pathname?.startsWith('/mypage') ? styles.active : ''}`}>
        <svg className={styles.icon} viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        <span>マイページ</span>
      </Link>
    </nav>
  );
}
