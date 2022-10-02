import { putProfileAPi } from "./fetchApi.mjs";
import { accessToken as token1 } from "./authorization.mjs";
const avatarUpdate = {
  avatar: localStorage.getItem("user"),
};
console.log(avatarUpdate);
const options = {
  method: "PUT",
  body: JSON.stringify(avatarUpdate),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: token1,
  },
};

fetch(putProfileAPi, options)
  .then((response) => response.json())
  .then(
    (avatarUpdate) => console.log(avatarUpdate)
    //localStorage.setItem("update", [JSON.stringify(update.accessToken)])
  );
