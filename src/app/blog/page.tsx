"use client";

import Link from "next/link";
import React from 'react';

export default function BlogPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0f1d',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
    }}>
      <header style={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(10, 15, 29, 0.9)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <Link href="/home" style={{ color: '#D4AF37', marginRight: '16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
        </Link>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Y.K. A-X-L</span>
        <span style={{ marginLeft: 'auto', fontSize: '0.8rem', backgroundColor: 'rgba(212,175,55,0.2)', color: '#D4AF37', padding: '4px 8px', borderRadius: '12px'}}>飛山 Blog</span>
      </header>

      <main style={{ padding: '24px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(212,175,55,0.1)', color: '#D4AF37', padding: '4px 12px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.3)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            代表ブログ | 産学連携
          </span>
        </div>

        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '24px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          横浜国立大学 梅原学長・蛯名理事を<br/>訪問させていただきました
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
              飛
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>飛山（代表理事）</div>
              <div style={{ fontSize: '0.7rem', color: '#a0a0a0' }}>横浜経営者倶楽部</div>
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#a0a0a0', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
            2024年4月
          </div>
        </div>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 'bold', borderLeft: '3px solid #D4AF37', paddingLeft: '8px', marginBottom: '16px' }}>訪問の様子</h2>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
             <span style={{marginLeft: '8px'}}>Image: YNU訪問の写真</span>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px', fontSize: '0.75rem', color: '#cbd5e1', borderRadius: '0 0 8px 8px' }}>
            横浜国立大学にて。左から飛山代表、梅原学長、蛯名理事と。
          </div>
        </section>

        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '24px' }}>
          横浜市のご紹介で横浜国立大学の梅原学長と蛯名理事（産学官及び法人外組織戦略担当）にお会いさせて頂きました。
          <br/><br/>
          素晴らしく開かれた考えをお持ちの両先生でユーモアもお持ちであっという間の時間でした。
        </p>

        <div style={{ backgroundColor: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', padding: '20px', marginBottom: '32px', borderLeft: '4px solid #D4AF37' }}>
          <p style={{ color: '#D4AF37', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6 }}>
            「改めて横浜は産官学の距離が近くありがたみを感じ、何かお役に立てればとの思いを再確認しました。」
          </p>
        </div>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 'bold', borderLeft: '3px solid #D4AF37', paddingLeft: '8px', marginBottom: '16px' }}>横浜国立大学</h2>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
             <span style={{marginLeft: '8px'}}>Image: YNU正門の写真</span>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px', fontSize: '0.75rem', color: '#cbd5e1', borderRadius: '0 0 8px 8px' }}>
            横浜国立大学 正門。Initiative for Global Arts & Sciences を掲げる。
          </div>
        </section>

        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '32px' }}>
          横浜国立大学は、<span style={{ color: '#D4AF37', fontWeight: 'bold' }}>実践性・先進性・開放性・国際性</span>の四つの基本精神を掲げ、教育と研究の実績を積み重ねてきました。
        </p>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1rem', color: '#D4AF37', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            成長戦略教育研究センター ベンチャービジネス担当
          </h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#e2e8f0', marginBottom: '12px' }}>
            こうした基本精神のもと、社会や産業のニーズに対応した新規分野に挑戦する精神と課題解決能力を備えた「<strong>起業家人材</strong>」を成長段階に合わせて育成。
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8' }}>
            シーズに基づくベンチャー支援だけではなく、社会ニーズに対応する大学発ベンチャーを育成・支援し、大学におけるイノベーション創出拠点を目指して活動を行っています。
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {['横浜国立大学', '産学連携', '横浜', '起業家育成', '産官学', 'ベンチャー支援'].map(tag => (
            <span key={tag} style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '6px 12px', borderRadius: '16px', fontSize: '0.75rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              #{tag}
            </span>
          ))}
        </div>

      </main>

      {/* Floating Action Bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(10, 15, 29, 0.95)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 20,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '8px 16px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            いいね 34
          </button>
          <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '8px 16px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            コメント 8
          </button>
        </div>
        <button style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37', padding: '8px 24px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          シェア
        </button>
      </div>

    </div>
  );
}
