const logOut = document.querySelector(".logOut");
import * as storage from "../localStorage.mjs";
import { remove } from "../localStorage.mjs";

//export function logOut() {
logOut.addEventListener("click", () => {
  remove("user");
  remove("banner");
  remove("token");

  storage.location.href = "./index.html";
});
