import { accessToken } from "./authorization.mjs";
const post = document.querySelector("#post");
const ImageButton = document.querySelector(".file-input");

ImageButton.addEventListener("click", () => {
  ImageButton.style.display = "block";
});

post.addEventListener("click", (e) => {
  e.preventDefault();

  const postUpdate = {
    title: document.querySelector("#postTitle").value,
    media: document.querySelector("#file-input").value,
    body: document.querySelector("#postBody").value,
  };

  console.log(postUpdate);
  const options = {
    method: "POST",
    body: JSON.stringify(postUpdate),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: accessToken,
    },
  };

  fetch("https://nf-api.onrender.com/api/v1/social/posts", options)
    .then((response) => response.json())
    .then((postUpdate) => console.log(postUpdate));
});
