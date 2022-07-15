const url = "http://localhost:4000/api";

export const fetchAllPosts = async () => {
  const response = await fetch(`${url}/posts`, {
    method: "GET",
  });
  const result = await response.json();
  return result.data.posts;
};
