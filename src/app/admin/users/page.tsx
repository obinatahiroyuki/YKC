"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

type User = {
  id: string;
  email: string;
  name: string;
  corporateName: string;
  role: string;
  createdAt: string;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Registration form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [role, setRole] = useState("USER");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // We will call the API we are about to create
    const res = await fetch("/api/admin/users");
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, corporateName, role }),
    });

    if (res.ok) {
      setIsModalOpen(false);
      setEmail("");
      setPassword("");
      setName("");
      setCorporateName("");
      // Refresh list
      fetchUsers();
    } else {
      alert("エラーが発生しました。");
    }
  };

  const handleExportCSV = () => {
    // Simple CSV export logic from client side for demonstration
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID,Email,氏名,企業名,権限,登録日時\n";
    users.forEach((user) => {
      const row = `${user.id},${user.email},${user.name || ""},${user.corporateName || ""},${user.role},${user.createdAt}`;
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ykc_users.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>会員管理</h1>
        <div className={styles.actions}>
          <button onClick={handleExportCSV} className={styles.exportBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            CSVエクスポート
          </button>
          <button onClick={() => setIsModalOpen(true)} className={styles.addBtn}>
             + 新規会員作成
          </button>
        </div>
      </header>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>権限</th>
              <th>氏名</th>
              <th>企業名</th>
              <th>メールアドレス</th>
              <th>登録日時</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  <span className={u.role === 'ADMIN' ? styles.roleAdmin : styles.roleUser}>
                    {u.role}
                  </span>
                </td>
                <td>{u.name || "未設定"}</td>
                <td>{u.corporateName || "-"}</td>
                <td>{u.email}</td>
                <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>新規会員の招待</h2>
            <form onSubmit={handleCreateUser}>
              <div className={styles.formGroup}>
                <label className={styles.label}>氏名</label>
                <input required className={styles.input} value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>企業名</label>
                <input required className={styles.input} value={corporateName} onChange={e => setCorporateName(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>メールアドレス</label>
                <input type="email" required className={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>初期パスワード</label>
                <input type="password" required className={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>権限</label>
                <select className={styles.input} value={role} onChange={e => setRole(e.target.value)}>
                  <option value="USER">一般会員 (USER)</option>
                  <option value="ADMIN">管理者 (ADMIN)</option>
                </select>
              </div>

              <div className={styles.modalActions}>
                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>キャンセル</button>
                <button type="submit" className={styles.submitBtn}>作成する</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
