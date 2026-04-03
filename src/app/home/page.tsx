import styles from './page.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className={styles.container}>
      
      {/* Header Area */}
      <header className={styles.header}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>AXL</div>
          <div className={styles.logoText}>
            <div className={styles.brandName}>Y.K. A-X-L</div>
            <div className={styles.subBrand}>横浜経営者倶楽部</div>
          </div>
        </div>
        <Link href="/notifications" className={styles.notificationBell}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
          <div className={styles.notificationDot}></div>
        </Link>
      </header>

      {/* Top Banner (Event alerts) */}
      <div className={styles.eventBanner}>
        <div className={styles.eventBannerContent}>
          <h3>📢 新着イベント通知</h3>
          <p>4/17 YOKOHAMA Meet-Up 7 参加受付中<br/>4/15 Business Pitch & Match 残席わずか</p>
        </div>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </div>
      </div>

      {/* Grid Menu */}
      <section>
        <h2 className={styles.sectionTitle}>メインメニュー</h2>
        <div className={styles.gridMenu}>
          
          <Link href="/search" className={styles.menuItem}>
            <div className={styles.iconWrapper}>
               <svg style={{width:'28px', height:'28px'}} viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <div className={styles.menuLabel}>業種別<br/>会員検索</div>
          </Link>

          <Link href="/bulletin" className={styles.menuItem}>
            <div className={styles.newBadge}>NEW</div>
            <div className={styles.iconWrapper}>
               <svg style={{width:'28px', height:'28px'}} viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
            </div>
            <div className={styles.menuLabel}>掲示板</div>
          </Link>

          <Link href="/contact" className={styles.menuItem}>
            <div className={styles.iconWrapper}>
              <svg style={{width:'28px', height:'28px'}} viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <div className={styles.menuLabel}>問合せ・<br/>個別相談</div>
          </Link>

          <Link href="/enterprise" className={styles.menuItem}>
            <div className={styles.iconWrapper}>
              <svg style={{width:'28px', height:'28px'}} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3v2h-2V3h2zm0 4v2h-2V7h2zm0 4v2h-2v-2h2zm0 4v2h-2v-2h2zm-4-12v2h-2V3h2zm0 4v2h-2V7h2zm0 4v2h-2v-2h2zm0 4v2h-2v-2h2zM7 3v2H5V3h2zm0 4v2H5V7h2zm0 4v2H5v-2h2zm0 4v2H5v-2h2zM3 19h18v2H3v-2zM11 3v14H9V3h2z"/></svg>
            </div>
            <div className={styles.menuLabel}>企業<br/>クローズアップ</div>
          </Link>

          <Link href="/services" className={styles.menuItem}>
            <div className={styles.newBadge}>NEW</div>
            <div className={styles.iconWrapper}>
              <svg style={{width:'28px', height:'28px'}} viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
            </div>
            <div className={styles.menuLabel}>商品・<br/>サービスinfo.</div>
          </Link>

          <Link href="/matching" className={styles.menuItem}>
            <div className={styles.iconWrapper}>
              <svg style={{width:'28px', height:'28px'}} viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <div className={styles.menuLabel}>ビジネス<br/>マッチング</div>
          </Link>

        </div>
      </section>

      {/* Blog Link */}
      <Link href="/blog" className={styles.blogBanner}>
        <div className={styles.blogInfo}>
          <div className={styles.blogIcon}>✍️</div>
          <span>飛山ブログ</span>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#a0a0a0"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </Link>

      {/* Monthly Events */}
      <div className={styles.monthEventBanner}>
        <div className={styles.monthEventHeader}>
           <span>🗓️ 4月のイベント情報</span>
        </div>
        <div className={styles.eventCard}>
           <div style={{fontSize: '0.8rem', color: '#D4AF37'}}>4/15 18:00 - 20:00</div>
           <div style={{fontWeight: 600, color: '#fff'}}>住友不動産 × アックスベンチャーズ × YKC Business Pitch</div>
        </div>
      </div>

    </div>
  );
}
