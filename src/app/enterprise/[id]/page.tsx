"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './page.module.css';

export default function EnterprisePage() {
  const params = useParams();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <Link href="/home" className={styles.backButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
          </Link>
          <span className={styles.brand}>Y.K. A-X-L</span>
        </div>
        <div className={styles.headerBadge}>企業クローズアップ</div>
      </header>

      <div className={styles.hero}>
        <div className={styles.companyTitleArea}>
          <div className={styles.heroLogo}>LOOVIC</div>
          <div>
            <h1 className={styles.companyName}>LOOVIC株式会社</h1>
            <p className={styles.companyNameEn}>LOOVIC inc.</p>
          </div>
        </div>

        <div className={styles.visionQuote}>
          <h2 className={styles.visionTitle}>「苦手を、苦手と意識しない社会を作る」</h2>
          <p className={styles.visionSub}>― 音声ナビで誰もが自由に移動できる世界へ</p>
        </div>

        <div className={styles.tagList}>
          <span className={styles.tag}>移動支援テック</span>
          <span className={styles.tag}>スタートアップ</span>
          <span className={styles.tag}>横浜発</span>
          <span className={styles.tag}>CES受賞</span>
          <span className={styles.tag}>社会課題解決</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIcon}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </div>
          <div className={styles.cardTitle}>会社概要</div>
        </div>
        <div className={styles.gridInfo}>
          <div className={styles.infoLabel}>会社名</div>
          <div className={styles.infoValue}>LOOVIC株式会社</div>
          
          <div className={styles.infoLabel}>設立</div>
          <div className={styles.infoValue}>2021年3月14日</div>
          
          <div className={styles.infoLabel}>代表</div>
          <div className={styles.infoValue}>代表取締役 山中 亨</div>
          
          <div className={styles.infoLabel}>所在地</div>
          <div className={styles.infoValue}>神奈川県横浜市港北区篠原町</div>
          
          <div className={styles.infoLabel}>事業内容</div>
          <div className={styles.infoValue}>音声ナビ＆ガイドアプリ「LOOVIC」の開発・運営、移動支援プラットフォームの提供</div>
          
          <div className={styles.infoLabel}>URL</div>
          <div className={styles.infoValue}><a href="https://www.loovic.co.jp" target="_blank" rel="noreferrer">www.loovic.co.jp</a></div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
           <div className={styles.cardIcon}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg> 
           </div>
           <div className={styles.cardTitle}>主力サービス</div>
        </div>
        <h3 className={styles.serviceTitle}>LOOVIC</h3>
        <p className={styles.serviceDesc}>
          画面を見ずに、声だけで目的地へ。<br/>
          まるで家族が隣で案内してくれているような、やさしいナビゲーションアプリ。
        </p>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>スマホ画面を見ずに音声のみで道案内。「右手のコンビニを右に曲がってください」など具体的な情報を提示</span>
          </div>
          <div className={styles.featureItem}>
            <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>ブレスレット型デバイスと連动し、進むべき方向に腕を引っ張られる感覚で誘導する体感ナビも展開</span>
          </div>
          <div className={styles.featureItem}>
            <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>高齢者・認知症・発達障がい・視覚空間認知障害のある方に向けた移動自立支援</span>
          </div>
          <div className={styles.featureItem}>
            <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>レジャー施設・スマートシティ・教育・建設など幅広い分野への応用展開中</span>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
           <div className={styles.cardIcon}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
           </div>
           <div className={styles.cardTitle}>ビジョン・ミッション</div>
        </div>
        <div className={styles.vMissionBox}>
           <div className={styles.vMissionLabel}>VISION</div>
           <div className={styles.vMissionTitle}>苦手を、苦手と意識しない社会を作る</div>
        </div>
        <p className={styles.featureItem} style={{fontSize:'0.75rem', marginTop:'1rem', lineHeight: '1.6'}}>
          目に見えにくい「苦手」をテクノロジーの力でそっと支え、貧富・年齢・性別・文化・人種に関わらず、誰もが分け隔てなく移動できる社会の実現を目指す。助け合いの心が世界中に広がることで、争いのない平和な未来を創ることが最終的なビジョン。
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
           <div className={styles.cardIcon}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
           </div>
           <div className={styles.cardTitle}>代表取締役プロフィール</div>
        </div>
        <div className={styles.ceoRow}>
          <div className={styles.ceoAvatar}>山</div>
          <div>
            <div className={styles.ceoSub}>代表取締役 CEO & Co-founder</div>
            <h4 className={styles.ceoName}>山中 亨</h4>
            <div className={styles.ceoBio}>
              自身の長男が視空間認知障害を持つことを機に、移動支援テクノロジーの開発を決意。2018年よりLOOVICプロジェクトを開始し、2021年に法人化。
            </div>
          </div>
        </div>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
             <span style={{color: '#D4AF37', marginRight: '4px'}}>●</span>
             <span>アイリスオーヤマ・ソフトバンクBB・NTTPCコミュニケーションズ・アマゾンウェブサービスジャパンにて技術営業・アライアンスに従事</span>
          </div>
          <div className={styles.featureItem}>
             <span style={{color: '#D4AF37', marginRight: '4px'}}>●</span>
             <span>ノバルス株式会社（IoT事業）・ユカイ工学（ロボティクス事業）を経てスタートアップへ</span>
          </div>
          <div className={styles.featureItem}>
             <span style={{color: '#D4AF37', marginRight: '4px'}}>●</span>
             <span>デジタルハリウッド大学大学院 修了（2020年）</span>
          </div>
          <div className={styles.featureItem}>
             <span style={{color: '#D4AF37', marginRight: '4px'}}>●</span>
             <span>2021年 LOOVIC株式会社 設立・代表取締役就任</span>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
           <div className={styles.cardIcon}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
           </div>
           <div className={styles.cardTitle}>主な受賞・採択実績</div>
        </div>
        
        <div className={styles.awardItem}>
          <div className={styles.awardYear}>2023</div>
          <div className={styles.awardContent}>
            <div className={styles.awardTitle}>CES Las Vegas | Omdia Innovation Awards 受賞</div>
            <div className={styles.awardDesc}>世界最大級のテクノロジー展示会にて評価</div>
          </div>
        </div>
        
        <div className={styles.awardItem}>
          <div className={styles.awardYear}>2022</div>
          <div className={styles.awardContent}>
            <div className={styles.awardTitle}>ASAC（青山スタートアップアクセラレーションセンター）採択</div>
            <div className={styles.awardDesc}>8社目の挑戦で採択、著名起業家輩出のプログラム</div>
          </div>
        </div>

        <div className={styles.awardItem}>
          <div className={styles.awardYear}>2022</div>
          <div className={styles.awardContent}>
            <div className={styles.awardTitle}>トヨタモビリティ基金 採択</div>
          </div>
        </div>

        <div className={styles.awardItem}>
          <div className={styles.awardYear}>2021</div>
          <div className={styles.awardContent}>
            <div className={styles.awardTitle}>日本スタートアップ支援協会 最優秀賞</div>
          </div>
        </div>
        
        <div className={styles.awardItem}>
          <div className={styles.awardYear}>2021</div>
          <div className={styles.awardContent}>
            <div className={styles.awardTitle}>HANEDA INNOVATION CITY IDEATHON 最優秀賞</div>
            <div className={styles.awardDesc}>羽田イノベーションシティでの実証実験へ</div>
          </div>
        </div>

        <div className={styles.awardItem}>
          <div className={styles.awardYear}>2020</div>
          <div className={styles.awardContent}>
            <div className={styles.awardTitle}>総務省・NICT「起業家万博」 NICT賞 受賞</div>
          </div>
        </div>

      </div>

      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>LOOVIC株式会社へのお問合せ</h3>
        <p className={styles.ctaDesc}>
          ビジネスマッチング・導入相談・コラボレーションのご相談はこちらから。横浜経営者倶楽部を通じてご連絡いただけます。
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.btnPrimary}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            個別相談を申込む
          </Link>
          <a href="https://www.loovic.co.jp" className={styles.btnSecondary} target="_blank" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            公式サイトへ
          </a>
        </div>
      </div>

    </div>
  );
}
