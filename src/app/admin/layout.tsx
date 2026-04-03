import Link from "next/link";
import { ReactNode } from "react";
import styles from "./layout.module.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>YKC Admin</div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>
            ダッシュボード
          </Link>
          <Link href="/admin/users" className={styles.navLink}>
            会員管理・CSV出力
          </Link>
          <Link href="/admin/bulletin" className={styles.navLink}>
            掲示板パトロール
          </Link>
          <hr className={styles.divider} />
          <Link href="/home" className={styles.backLink}>
            ← アプリに戻る
          </Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
