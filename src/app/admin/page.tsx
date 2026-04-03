import Link from "next/link";
import styles from "./page.module.css";
import { db } from "@/db";
import { users, bulletinPosts, events } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function AdminDashboard() {
  let userCount = 0;
  let postCount = 0;
  let eventCount = 0;
  
  try {
    const allUsers = await db.select().from(users);
    userCount = allUsers.length;
    
    const allPosts = await db.select().from(bulletinPosts);
    postCount = allPosts.length;
    
    const allEvents = await db.select().from(events);
    eventCount = allEvents.length;
  } catch (e) {
    console.error("DB stats error", e);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>管理者ダッシュボード</h1>
        <p className={styles.subtitle}>YKCアプリの利用状況概要と管理ツールへのアクセス</p>
      </header>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricTitle}>総会員数</div>
          <div className={styles.metricValue}>{userCount} 名</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricTitle}>総投稿数（掲示板）</div>
          <div className={styles.metricValue}>{postCount} 件</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricTitle}>登録済イベント数</div>
          <div className={styles.metricValue}>{eventCount} 件</div>
        </div>
      </div>

      <div className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>クイックアクション</h2>
        <div className={styles.actionGrid}>
          <Link href="/admin/users" className={styles.actionBtn}>
            会員の追加・管理
          </Link>
          <Link href="/admin/users" className={styles.actionBtnSecondary}>
             CSV一括ダウンロード
          </Link>
          <Link href="/admin/bulletin" className={styles.actionBtnSecondary}>
            掲示板パトロール
          </Link>
        </div>
      </div>
    </div>
  );
}
