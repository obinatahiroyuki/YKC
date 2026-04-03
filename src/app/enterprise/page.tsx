"use client";

import Link from "next/link";
import React from 'react';

export default function EnterpriseListPage() {
  const mockEnterprises = [
    {
      id: "loovic",
      name: "LOOVIC株式会社",
      sub: "移動支援テック / スタートアップ",
      desc: "「苦手を、苦手と意識しない社会を作る」\n音声ナビで誰もが自由に移動できる世界へ",
      isNew: true
    },
    {
      id: "ykc",
      name: "株式会社YKCソリューションズ",
      sub: "ITコンサルティング / システム開発",
      desc: "企業のDX推進を強力にサポート。\n最新技術を取り入れたソリューションを提供します。"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a1128',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Helvetica Neue", Arial, sans-serif'
    }}>
      <header style={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(10, 17, 40, 0.9)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <Link href="/home" style={{ color: '#D4AF37', marginRight: '16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
        </Link>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Y.K. A-X-L</span>
        <span style={{ marginLeft: 'auto', fontSize: '0.8rem', backgroundColor: 'rgba(212,175,55,0.2)', color: '#D4AF37', padding: '4px 8px', borderRadius: '12px'}}>企業一覧</span>
      </header>

      <main style={{ padding: '24px' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#fff' }}>企業クローズアップ</h1>
        <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5}}>
          横浜経営者倶楽部の注目の会員企業をご紹介します。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mockEnterprises.map(ent => (
            <Link href={`/enterprise/${ent.id}`} key={ent.id} style={{textDecoration: 'none'}}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '20px',
                position: 'relative'
              }}>
                {ent.isNew && (
                  <span style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#D4AF37', color: '#000', fontSize: '0.7rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px' }}>
                    NEW
                  </span>
                )}
                <h2 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '4px' }}>{ent.name}</h2>
                <div style={{ fontSize: '0.8rem', color: '#D4AF37', marginBottom: '12px' }}>{ent.sub}</div>
                <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{ent.desc}</p>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', color: '#4da6ff', fontSize: '0.85rem' }}>
                  詳細を見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px'}}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
