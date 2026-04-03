"use client";

import Link from "next/link";
import React from 'react';

export default function SearchPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Helvetica Neue", Arial, sans-serif'
    }}>
      <header style={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Link href="/home" style={{ color: '#D4AF37', marginRight: '16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
        </Link>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Y.K. A-X-L</span>
      </header>

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#D4AF37"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        </div>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#D4AF37' }}>ただいま準備中です</h1>
        <p style={{ color: '#a0a0a0', lineHeight: 1.6, maxWidth: '400px' }}>
          こちらのページ（業種別会員検索）は現在開発中です。<br/>公開まで今しばらくお待ちください。
        </p>
        <Link href="/home" style={{
          marginTop: '32px',
          padding: '12px 24px',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          ホームに戻る
        </Link>
      </main>
    </div>
  );
}
