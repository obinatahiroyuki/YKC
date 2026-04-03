import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={`${styles.hero} glass`}>
        <h1 className={styles.title}>Welcome to YKC</h1>
        <p className={styles.subtitle}>
          Connect with like-minded individuals, join exciting communities, and discover events tailored just for you.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryAction}>Get Started</button>
          <button className={styles.secondaryAction}>Explore Events</button>
        </div>
      </main>
    </div>
  );
}
