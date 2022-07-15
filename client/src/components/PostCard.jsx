import React from "react";

export default function PostCard({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>by: {post.author.username}</p>
    </div>
  );
}
