import BottomNav from "@/components/BottomNav";
import { ReactNode } from "react";

export default function BulletinLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main style={{ paddingBottom: '80px' }}>
        {children}
      </main>
      <BottomNav />
    </>
  );
}
