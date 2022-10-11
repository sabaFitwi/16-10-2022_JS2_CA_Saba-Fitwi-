const logOut = document.querySelector(".logOut");
import * as storage from "../localStorage.mjs";
import { remove } from "../localStorage.mjs";

//export function logOut() {
logOut.addEventListener("click", () => {
  remove("user");
  remove("banner");
  remove("token");

  storage.storage.location.href = "./login.html";
});
//}

// const removeUser = remove("user");
// const removeBanner = remove("banner");
// const removeToken = remove("token");
// removeUser;
// removeBanner;
// removeToken;
