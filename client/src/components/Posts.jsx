import React from "react";
import PostCard from "./PostCard";

export default function Posts({ postList }) {
  return (
    <div>
      {postList.map((post, index) => {
        return <PostCard key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
}
