import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";

export async function removePost(id) {
  if (!id) {
    throw new Error("update requires a postID");
  }
  const updatePostApi1 = postsApi + "/" + `${id}`;

  const response = await authFetch(updatePostApi1, {
    method: "delete",
  });
  const result = await response.json();
  console.log(result);
}
