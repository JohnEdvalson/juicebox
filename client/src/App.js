import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "api/posts";
import { NavBar, Posts, Users } from "components";

export default function App() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPostList = async () => {
      const result = await fetchAllPosts();
      setPostList(result);
    };
    getPostList();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/posts" element={<Posts postList={postList} />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
