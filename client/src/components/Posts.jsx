import React from "react";
import PostCard from "./PostCard";
import styles from "../styles/Posts.module.css";
export default function Posts({ postList }) {
  return (
    <div>
      <h1 className={styles.title}>Posts</h1>
      {postList.map((post, index) => {
        return <PostCard key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
}
