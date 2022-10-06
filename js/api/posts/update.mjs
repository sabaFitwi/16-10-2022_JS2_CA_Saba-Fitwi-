//import { updatePostApi } from "./fetchApi.mjs";

import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";
import { viewAllPosts, viewSinglePost } from "../posts/getPost.mjs";
async function setUpdate() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (form) {
    const post = await viewSinglePost(796);

    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // const form = event.target;
      // const formData = new FormData(form);
      // const post = Object.fromEntries(formData.entries());
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
// import { accessToken as token2 } from "./collection/authorization.mjs";

// const updatePost = {
//   title: "",
//   body: "",
//   media: "https://postimg.cc/23YGDmSx",
// };
// console.log(updatePost);
// const options = {
//   method: "PUT",
//   body: JSON.stringify(updatePost),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     Authorization: token2,
//   },
// };
// fetch(updatePostApi, options)
//   .then((response) => response.json())
//   .then((updatePost) => console.log(updatePost));
// console.log(updatePost);
