import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="card">
      <h1>{user.username}</h1>
      <p>{user.name}</p>
      <p>{user.location}</p>
    </div>
  );
}
