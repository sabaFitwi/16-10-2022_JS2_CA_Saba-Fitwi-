//import { updatePostApi } from "./fetchApi.mjs";

import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";
//import { viewAllPosts, viewSinglePost } from "../posts/getPost.mjs";
export async function setUpdate() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (form) {
    const post = await viewSinglePost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const postData = {
        title: form.title.value,
        media: form.media.value,
        body: form.body.value,
      };
      post.id = id;
      update(postData);
      //console.log(postData);
    });
  }
}
//setUpdate();

async function update(postData) {
  if (!postData.id) {
    throw new Error("update requires a postID");
  }

  const updatePostApi1 = postsApi + "/" + `${postData.id}`;

  const response = await authFetch(updatePostApi1, {
    method: "PUT",
    body: JSON.stringify(postData),
  });
  const result = await response.json();
  return result;
  //console.log(result);
}
