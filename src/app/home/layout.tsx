import BottomNav from '@/components/BottomNav';
import styles from './layout.module.css';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutContainer}>
      <main className={styles.mainContent}>
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
