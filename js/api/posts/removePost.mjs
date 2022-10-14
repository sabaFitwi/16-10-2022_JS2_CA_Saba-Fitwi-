import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";

const postDelete = document.querySelector("#postDeleteButton");

postDelete.addEventListener("click", () => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  removePost(id);
});

async function removePost(id) {
  if (!id) {
    throw new Error("remove requires a postID");
  }
  const updatePostApi1 = postsApi + "/" + id;
  console.log(updatePostApi1);

  const response = await authFetch(updatePostApi1, {
    method: "delete",
  });
  const result = await response.json();
  return result;
}
