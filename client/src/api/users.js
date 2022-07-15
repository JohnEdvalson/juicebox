export const fetchAllUsers = async () => {
  const response = await fetch(`/api/users`, {
    method: "GET",
  });
  const result = await response.json();
  return result.users;
};
