"use client";

import Link from 'next/link';
import styles from './page.module.css';

const MOCK_SERVICES = [
  {
    id: 1,
    title: "次世代 生成AI導入パッケージ",
    company: "株式会社A-X-L",
    desc: "企業の業務効率化を推進する社内向けChatGPT環境構築と、導入コンサルティングをワンストップで提供します。",
    benefit: "会員限定 20%OFF",
    badge: "IT・システム"
  },
  {
    id: 2,
    title: "LOOVIC 音声ナビゲーションAPI",
    company: "LOOVIC株式会社",
    desc: "観光施設や商業施設内で、画面を見ずにインクルーシブな移動体験を提供する音声ナビAPIの組み込みサービス。",
    benefit: "初期費用 無料",
    badge: "ソフトウェア"
  },
  {
    id: 3,
    title: "リモート快適化 オフィスデザイン",
    company: "YKCスペースデザイン",
    desc: "テレワークと出社が混在するこれからの時代に合わせた、ハイブリッド型オフィスの設計・施工をお引き受けします。",
    benefit: "無料レイアウト提案",
    badge: "デザイン・施工"
  },
  {
    id: 4,
    title: "IPO支援向け 財務コンサルティング",
    company: "横浜フィナンシャルパートナーズ",
    desc: "上場準備段階のスタートアップ企業を対象とした、内部統制および資本政策の策定支援。",
    benefit: "初回相談 無料",
    badge: "コンサルティング"
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <Link href="/home" className={styles.backButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
          </Link>
          <span className={styles.brand}>Y.K. A-X-L</span>
        </div>
        <div className={styles.headerBadge}>商品・サービス</div>
      </header>

      <div className={styles.pageTitleArea}>
        <h1 className={styles.pageTitle}>商品・サービスinfo.</h1>
        <p className={styles.pageSub}>会員企業の優れた最新サービスや、商談につながるお役立ち情報をご紹介します。</p>
      </div>

      <div className={styles.searchBox}>
        <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" className={styles.searchInput} placeholder="サービス名やキーワードで検索" />
      </div>

      <div className={styles.grid}>
        {MOCK_SERVICES.map(service => (
          <div key={service.id} className={styles.productCard}>
            <div className={styles.productImage}>
              <div className={styles.productBadge}>{service.badge}</div>
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <div className={styles.productContent}>
              <div className={styles.companyName}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                {service.company}
              </div>
              <h3 className={styles.productTitle}>{service.title}</h3>
              <p className={styles.productDesc}>{service.desc}</p>
              <div className={styles.productFooter}>
                <div className={styles.priceInfo}>{service.benefit}</div>
                <button className={styles.detailBtn}>詳細を見る</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
