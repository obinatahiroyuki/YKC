"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

const TABS = ["すべて", "イベント", "PR", "ニュース", "募集・相談", "その他"];

const MOCK_POSTS = [
  {
    id: 1,
    author: "渡辺 智",
    company: "〇〇株式会社",
    avatar: "渡",
    time: "1時間前",
    category: "イベント",
    content: "次回の「YKCゴルフコンペ」の日程が5月15日（土）に決定しました！\n詳細は追ってイベント案内ページに掲載いたしますが、まずは皆様日程確保をお願いいたします！",
    hasImage: true,
    likes: 12,
    comments: 3,
    liked: false
  },
  {
    id: 2,
    author: "佐藤 健",
    company: "株式会社A-X-L",
    avatar: "佐",
    time: "3時間前",
    category: "ニュース",
    content: "弊社が新しく「生成AI活用支援サービス」をリリースしました。会員の皆様には特別価格でのご提供をご用意しております。\n詳しい資料は後日ご案内しますが、ご興味ある方は個別相談フォームからお気軽にご連絡ください！",
    hasImage: false,
    likes: 8,
    comments: 1,
    liked: true
  }
];

export default function BulletinPage() {
  const [activeTab, setActiveTab] = useState("すべて");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <Link href="/home" className={styles.backButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
          </Link>
          <span className={styles.brand}>Y.K. A-X-L</span>
        </div>
        <div className={styles.headerBadge}>掲示板</div>
      </header>

      <div className={styles.actionRow}>
        <button className={styles.postButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          投稿する
        </button>
      </div>

      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          {TABS.map(tab => (
            <div 
              key={tab} 
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.feed}>
        {MOCK_POSTS.map(post => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postHeader}>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{post.avatar}</div>
                <div>
                  <div className={styles.authorName}>{post.author}</div>
                  <div className={styles.authorCompany}>{post.company}</div>
                </div>
              </div>
              <div className={styles.postMeta}>
                <div className={styles.time}>{post.time}</div>
                <div className={styles.categoryTag}>{post.category}</div>
              </div>
            </div>

            <div className={styles.postContent}>
              {post.content.split('\n').map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}
            </div>

            {post.hasImage && (
              <div className={styles.imageBanner}>
                 <svg className={styles.bannerBgIcon} width="160" height="160" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                 <div className={styles.bannerSub}>YOKOHAMA EXECUTIVE CLUB</div>
                 <h4 className={styles.bannerTitle}>GOLF MEETING 2024</h4>
              </div>
            )}

            <div className={styles.actions}>
              <button className={`${styles.actionBtn} ${post.liked ? styles.liked : ''}`}>
                {post.liked ? (
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                ) : (
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                )}
                {post.likes}
              </button>
              <button className={styles.actionBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                {post.comments}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
