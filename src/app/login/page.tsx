"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError('メールアドレスまたはパスワードが正しくありません。');
    } else {
      router.push('/home');
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.authCard} glass`}>
        <h1 className={styles.title}>Y.K. A-X-L</h1>
        <p className={styles.subtitle}>横浜経営者倶楽部</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          {error && <div style={{ color: '#ff4d4f', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">メールアドレス</label>
            <input 
              id="email"
              type="email" 
              className={styles.input} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">パスワード</label>
            <input 
              id="password"
              type="password" 
              className={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className={styles.button}>ログイン</button>
        </form>
      </div>
    </div>
  );
}
