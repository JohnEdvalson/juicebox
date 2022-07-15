import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
      </div>
      <div>Created by: Stephan and John</div>
    </nav>
  );
};

export default NavBar;
