import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";
import { id } from "../profile/singleProfile.mjs";

//delete a post
const postDelete = document.querySelector("#postDeleteButton");

postDelete.addEventListener("click", () => {
  removePost(id);
  location.reload();
});

export async function removePost(id) {
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
