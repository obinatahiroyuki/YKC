"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

const CATEGORIES = [
  { id: 'sales', label: '営業支援\n相談' },
  { id: 'funding', label: '資金調達\n相談' },
  { id: 'ipo', label: 'IPO\n相談' },
  { id: 'ma', label: '事業承継・\nM&A相談' },
  { id: 'academic', label: '産学連携\n支援' },
  { id: 'legal', label: '法務\n相談' },
  { id: 'other', label: '顧問紹介・その他', fullWidth: true },
];

export default function ContactPage() {
  const [selectedCat, setSelectedCat] = useState<string>('sales');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/home" className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
        </Link>
        <span className={styles.brand}>Y.K. A-X-L</span>
      </header>

      <div className={styles.titleArea}>
        <div className={styles.badge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
          INDIVIDUAL CONSULTATION
        </div>
        <h1 className={styles.pageTitle}>問合せ・<span>個別相談</span></h1>
        <p className={styles.description}>ご相談内容をご入力ください。担当者よりZOOMミーティングのご案内をお送りします。</p>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>相談カテゴリを選択</div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.categoryGrid}>
          {CATEGORIES.map(cat => (
            <div 
              key={cat.id} 
              className={`${styles.categoryCard} ${selectedCat === cat.id ? styles.active : ''} ${cat.fullWidth ? styles.fullWidth : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              <div className={styles.catIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <div className={styles.catText} style={{ whiteSpace: 'pre-line' }}>{cat.label}</div>
              <div className={styles.checkIcon}>
                 {selectedCat === cat.id && <svg width="10" height="10" viewBox="0 0 24 24" fill="#000"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.formBox} style={{marginBottom: '1rem'}}>
        <div className={styles.sectionHeader} style={{marginBottom: 0}}>
          <div className={styles.sectionTitle}>お客様情報</div>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>お名前 <span className={styles.required}>必須</span></label>
            <input type="text" className={styles.input} placeholder="山田 太郎" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>会社名 <span className={styles.required}>必須</span></label>
            <input type="text" className={styles.input} placeholder="株式会社○○" />
          </div>
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>メールアドレス <span className={styles.required}>必須</span></label>
           <input type="email" className={styles.input} placeholder="example@company.co.jp" />
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>電話番号</label>
           <input type="tel" className={styles.input} placeholder="090-0000-0000" />
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>業種</label>
           <select className={styles.input}>
             <option>業種を選択してください</option>
             <option>IT・通信</option>
             <option>製造・メーカー</option>
             <option>サービス業</option>
           </select>
        </div>
      </div>

      <div className={styles.formBox} style={{marginBottom: '2rem'}}>
        <div className={styles.sectionHeader} style={{marginBottom: 0}}>
          <div className={styles.sectionTitle}>相談内容</div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>ご相談の詳細 <span className={styles.required}>必須</span></label>
           <textarea className={styles.input} placeholder="ご相談内容をできるだけ詳しくご記入ください。例）現在の課題、ご希望の支援内容など"></textarea>
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>ご希望の日程（第一希望）</label>
           <input type="date" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>ご希望の時間帯（第一希望）</label>
           <select className={styles.input}>
             <option>時間帯を選択</option>
             <option>10:00 - 12:00</option>
             <option>13:00 - 15:00</option>
             <option>15:00 - 17:00</option>
             <option>17:00 - 19:00</option>
           </select>
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>ご希望の日程（第二希望）</label>
           <input type="date" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>ご希望の時間帯（第二希望）</label>
           <select className={styles.input}>
             <option>時間帯を選択</option>
             <option>10:00 - 12:00</option>
             <option>13:00 - 15:00</option>
             <option>15:00 - 17:00</option>
             <option>17:00 - 19:00</option>
           </select>
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>ご希望の日程（第三希望）</label>
           <input type="date" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
           <label className={styles.label}>ご希望の時間帯（第三希望）</label>
           <select className={styles.input}>
             <option>時間帯を選択</option>
             <option>10:00 - 12:00</option>
             <option>13:00 - 15:00</option>
             <option>15:00 - 17:00</option>
             <option>17:00 - 19:00</option>
           </select>
        </div>
      </div>

      <div className={styles.flowBox} style={{marginBottom: '2rem'}}>
        <div className={styles.flowHeader}>
          📋 お申込みの流れ
        </div>
        <div className={styles.flowSteps}>
           <div className={styles.flowLine}></div>
           <div className={styles.step}>
             <div className={styles.stepIcon}><svg fill="#fff" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div>
             <div className={styles.stepText}>フォーム<br/>送信</div>
           </div>
           <div className={styles.step}>
             <div className={styles.stepIcon}><svg fill="#fff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
             <div className={styles.stepText}>担当より<br/>ご連絡</div>
           </div>
           <div className={styles.step}>
             <div className={styles.stepIcon}><svg fill="#fff" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg></div>
             <div className={styles.stepText}>ZOOM<br/>ミーティング</div>
           </div>
           <div className={styles.step}>
             <div className={styles.stepIcon}><svg fill="#fff" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
             <div className={styles.stepText}>経営会議<br/>へご案内</div>
           </div>
        </div>
      </div>

      <button className={styles.submitBtn}>
         <svg width="20" height="20" viewBox="0 0 24 24" fill="#000"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
         送信してZOOMミーティングを申込む
      </button>

      <p className={styles.disclaimer}>
        送信後、担当者より2営業日以内にご連絡いたします。<br/>
        個人情報は相談対応のために使用いたします。
      </p>

    </div>
  );
}
