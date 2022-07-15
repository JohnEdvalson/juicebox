import React from "react";
import PostCard from "./PostCard";

export default function Posts({ postList }) {
  return (
    <div>
      <h1 className="title">Posts</h1>
      {postList.map((post, index) => {
        return <PostCard key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
}
