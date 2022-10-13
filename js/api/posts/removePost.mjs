import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";

//delete a post
const postDelete = document.querySelector("#postDeleteButton");
function setRemoveListener() {
  postDelete.addEventListener("click", () => {
    const queryString = document.location.search;
    const parameters = new URLSearchParams(queryString);
    const id = parameters.get("id");
    console.log(id);
    removePost(id);
    location.reload();
  });
}

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
//console.log("hihi");
setRemoveListener();
