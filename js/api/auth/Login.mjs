import { logInApi } from "../fetchApi.mjs";
import * as storage from "../localStorage.mjs";
import { update } from "../posts/update.mjs";

// const userEmail = localStorage.getItem("userEmail");
// const userPassword = localStorage.getItem("userPassword");
// const errorMessage = document.querySelector(".error-message");
update({ id: 413, title: "title update", body: "body title update" });
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  const user = {
    email: form.email.value,
    password: form.password.value,
    //avatar: localStorage.getItem("userAvatar"),
  };

  console.log(user);
  async function login(user) {
    const options = {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(logInApi, options);
    const { accessToken, ...profile } = await response.json();
    storage.save("token", accessToken);
    storage.save("user", profile);
    alert("you are logged in");
  }
  login(user);

  // if (user.email == userEmail && user.password == userPassword) {
  //   window.location.href = "/profile.html";
  // } else {
  //   errorMessage.innerHTML += `<p class"">invalid email or password. Please use your login account</p>`;
  //   console.log("invalid email or password. please use your login account");
  // }
});
