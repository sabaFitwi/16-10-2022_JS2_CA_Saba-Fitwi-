import { postsApi } from "../fetchApi.mjs";
import { authFetch } from "../authFetch.mjs";

const form = document.querySelector(".post");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const postData = {
    title: form.title.value,
    media: form.media.value,
    body: form.body.value,
  };
  createPost(postData);
  //console.log(postData);
});

async function createPost(postData) {
  console.log(postData);
  const response = await authFetch(postsApi, {
    method: "post",
    body: JSON.stringify(postData),
  });
  const result = await response.json();
  console.log(result);
}
