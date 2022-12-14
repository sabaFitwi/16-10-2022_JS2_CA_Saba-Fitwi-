import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";
import { viewSinglePost } from "../posts/getPost.mjs";
//import { getSinglePost } from "./singlePost.mjs";

export async function setUpdate() {
  const form = document.querySelector("#updatePost");

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  console.log(id);
  if (form) {
    const post = await viewSinglePost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;
    form.tags.value = post.tags;

    /**
     * Handles the update post form .
     * @param {Event} submit form submission.
     */

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const postData = {
        title: form.title.value,
        media: form.media.value,
        body: form.body.value,
        tags: form.tags.value,
      };
      postData.id = id;
      update(postData);
    });
  }
}
setUpdate();

export async function update(postData) {
  if (!postData.id) {
    throw new Error("update requires a postID");
  }

  const updatePostApi1 = postsApi + "/" + `${postData.id}`;

  console.log(updatePostApi1);

  const response = await authFetch(updatePostApi1, {
    method: "PUT",
    body: JSON.stringify(postData),
  });
  const result = await response.json();
  return result;
}
