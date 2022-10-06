import { logInApi } from "../fetchApi.mjs";
import * as storage from "../localStorage.mjs";
// import { load } from "../localStorage.mjs";
// const { email, password } = load("user");
//const errorMessage = document.querySelector(".error-message");

const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  const user = {
    email: form.email.value,
    password: form.password.value,
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

  // if (user.email == email && user.password == password) {
  //   window.location.href = "/profile.html";
  // } else {
  //   errorMessage.innerHTML += `<p class"">invalid email or password. Please use your login account</p>`;
  //   //   console.log("invalid email or password. please use your login account");
  // }
});
