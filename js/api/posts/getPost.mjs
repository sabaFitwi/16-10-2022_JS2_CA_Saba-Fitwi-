import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";

export async function viewAllPosts() {
  const response = await authFetch(postsApi);
  const result = await response.json();
  return result;
}

export async function viewSinglePost(id) {
  if (!id) {
    throw new Error("get required id");
  }
  const getPostApi = postsApi + `/${id}`;

  const response = await authFetch(getPostApi);
  const result = await response.json();
  return result;
}
