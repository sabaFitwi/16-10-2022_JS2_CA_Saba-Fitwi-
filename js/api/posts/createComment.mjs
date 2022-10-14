import { postsApi } from "../fetchApi.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Creates a post.
 * @param {Event} form the form you submitting on the page
 * @param {Function} postData the function to create the post .
 */
const form = document.querySelector(".post");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const postData = {
    body: form.body.value,
  };
  createPost(postData);
  //console.log(postData);
});

async function createPost(postData) {
  console.log(postData);
  const Url = postsApi + id + "/comment";
  const response = await authFetch(postsApi, {
    method: "post",
    body: JSON.stringify(postData),
  });
  const result = await response.json();
  location.reload();

  //console.log(result);
  return result;
}
