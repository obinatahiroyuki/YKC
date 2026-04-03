"use client";

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import styles from './page.module.css';

export default function MyPage() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>マイページ</div>
      </header>

      <div className={styles.profileCard}>
        <div className={styles.avatar}>横</div>
        <h2 className={styles.userName}>横浜 太郎</h2>
        <div className={styles.userCompany}>株式会社YKCソリューションズ</div>
        <button className={styles.editBtn}>プロフィールを編集する</button>
      </div>

      <div className={styles.menuList}>
        <Link href="/notifications" className={styles.menuItem}>
          <div className={styles.menuLeft}>
            <div className={styles.menuIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            </div>
            <div className={styles.menuText}>お知らせ設定</div>
          </div>
          <svg className={styles.menuArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"></path></svg>
        </Link>
        
        <Link href="#" className={styles.menuItem}>
          <div className={styles.menuLeft}>
            <div className={styles.menuIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            </div>
            <div className={styles.menuText}>過去のイベント参加履歴</div>
          </div>
          <svg className={styles.menuArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"></path></svg>
        </Link>

        <Link href="/contact" className={styles.menuItem}>
          <div className={styles.menuLeft}>
            <div className={styles.menuIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <div className={styles.menuText}>運営へのお問い合わせ</div>
          </div>
          <svg className={styles.menuArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"></path></svg>
        </Link>
      </div>

      <div className={styles.logoutSection}>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
          ログアウト
        </button>
      </div>
    </div>
  );
}
