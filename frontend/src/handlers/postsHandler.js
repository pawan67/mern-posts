import { getUser } from "./authHandler";

export const getAllPosts = async () => {
  const user = getUser();
  const response = await fetch(`/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const createPost = async (caption, image) => {
  const user = getUser();
  const response = await fetch(`/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ caption, image }),
  });
  const data = await response.json();
  return data;
};
