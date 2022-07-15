import React from "react";
import UserCard from "./UserCard";

export default function Users({ userList }) {
  return (
    <div>
      <h1 className="title">Users</h1>
      {userList.map((user, index) => {
        return <UserCard key={`Key: ${index}`} user={user} />;
      })}
    </div>
  );
}
