import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "api/posts";
import { fetchAllUsers } from "api/users";
import { NavBar, Posts, Users } from "components";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const getPostList = async () => {
      const result = await fetchAllPosts();
      setPostList(result);
    };
    getPostList();
  }, []);

  useEffect(() => {
    const getUserList = async () => {
      const result = await fetchAllUsers();
      setUserList(result);
    };
    getUserList();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/posts" element={<Posts postList={postList} />} />
        <Route path="/users" element={<Users userList={userList} />} />
      </Routes>
    </div>
  );
}
