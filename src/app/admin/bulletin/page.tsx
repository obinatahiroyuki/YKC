"use client";

import { useState, useEffect } from "react";
import styles from "../users/page.module.css"; // Reuse table styles

type Post = {
  id: string;
  title: string;
  content: string;
  status: string;
  createdAt: string;
  user: {
    name: string;
    corporateName: string;
  } | null;
};

export default function AdminBulletinPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/admin/bulletin");
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
  };

  const handleDelete = async (postId: string) => {
    if (!confirm("本当にこの投稿を削除（非表示）にしますか？")) return;

    const res = await fetch("/api/admin/bulletin", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId }),
    });

    if (res.ok) {
      fetchPosts();
    } else {
      alert("削除に失敗しました。");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>掲示板パトロール</h1>
      </header>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ステータス</th>
              <th>投稿者 / 企業名</th>
              <th>投稿内容 (プレビュー)</th>
              <th>投稿日時</th>
              <th>アクション</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <span className={post.status === 'PUBLISHED' ? styles.roleAdmin : styles.roleUser}>
                    {post.status}
                  </span>
                </td>
                <td>
                  <strong>{post.user?.name || "退会ユーザー"}</strong><br/>
                  <small style={{ color: "#8C9BAB" }}>{post.user?.corporateName}</small>
                </td>
                <td style={{ maxWidth: "300px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {post.content}
                </td>
                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                <td>
                  {post.status === "PUBLISHED" && (
                    <button 
                      onClick={() => handleDelete(post.id)}
                      style={{ background: "#e74c3c", color: "white", border: "none", padding: "0.4rem 0.8rem", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                    >
                      削除
                    </button>
                  )}
                  {post.status === "DELETED" && (
                    <span style={{ color: "#e74c3c", fontSize: "0.8rem", fontWeight: "bold" }}>削除済み</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
