export const fetchAllPosts = async () => {
  const response = await fetch(`/api/posts`, {
    method: "GET",
  });
  const result = await response.json();
  return result.posts;
};
