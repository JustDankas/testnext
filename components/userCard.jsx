import React, { Component } from "react";
function UserCard({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;
