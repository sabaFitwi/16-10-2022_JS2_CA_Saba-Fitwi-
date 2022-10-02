import { updatePostApi } from "./fetchApi.mjs";
import { accessToken as token2 } from "./collection/authorization.mjs";

const updatePost = {
  title: "",
  body: "",
  media: "https://postimg.cc/23YGDmSx",
};
console.log(updatePost);
const options = {
  method: "PUT",
  body: JSON.stringify(updatePost),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: token2,
  },
};
fetch(updatePostApi, options)
  .then((response) => response.json())
  .then((updatePost) => console.log(updatePost));
console.log(updatePost);
